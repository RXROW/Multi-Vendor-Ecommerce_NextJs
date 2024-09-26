import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supplierData = await request.json();

    const requiredFields = [
      "email",
      "name",
      "phone",
      "mainProduct",
      "code",
      "userId",
    ];
    for (const field of requiredFields) {
      if (!supplierData[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const newSupplierProfile = await db.supplierProfile.create({
      data: {
        code: supplierData.code,
        email: supplierData.email,
        name: supplierData.name,
        notes: supplierData.notes || null,
        phone: supplierData.phone,
        physicalAddress: supplierData.address || null,
        terms: supplierData.terms || null,
        isActive: supplierData.isActive ?? true,
        profileImageUrl: supplierData.profileImageUrl,
        mainProduct: supplierData.mainProduct,
        products: supplierData.products,
        userId: supplierData.userId,
      },
    });

    return NextResponse.json(newSupplierProfile, { status: 201 });
  } catch (error: any) {
    console.error("Error creating supplier profile:", error);
    return NextResponse.json(
      {
        message: "Failed to create supplier profile",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
 
export async function GET(request: Request) {
  try {
    const profiles = await db.supplierProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    if (profiles.length === 0) {
      return NextResponse.json(
        { message: "No supplier profiles found" },
        { status: 404 }
      );
    }

    return NextResponse.json(profiles, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching supplier profiles:", error);
    return NextResponse.json(
      {
        message: "Failed to fetch supplier profiles",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
