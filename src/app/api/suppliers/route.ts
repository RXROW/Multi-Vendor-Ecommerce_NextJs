import db from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const supplierData = await request.json();
     const requiredFields = [
      "email",
      "name",
      "phone",
      "mainProduct",
      "code",
    ];

     for (const field of requiredFields) {
      if (!supplierData[field]) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

     if (!supplierData.userId) {
      console.warn("Warning: userId is missing. Setting to null.");
      supplierData.userId = null; 
    }

     const newSupplierProfile = await db.supplierProfile.create({
      data: {
        code: supplierData.code,
        email: supplierData.email,
        name: supplierData.name,
        notes: supplierData.notes ?? null,
        phone: supplierData.phone,
        physicalAddress: supplierData.physicalAddress ?? null,
        terms: supplierData.terms ?? null,
        isActive: supplierData.isActive ?? true,
        profileImageUrl: supplierData.profileImageUrl ?? null,
        mainProduct: supplierData.mainProduct,
        products: supplierData.products,
        userId: supplierData.userId,
      },
    });

    return NextResponse.json(newSupplierProfile, { status: 201 });
  } catch (error: any) {
    console.error("Error creating supplier profile:", error);
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
       const targetField= error.meta?.target;

      if (targetField === "email") {
        return NextResponse.json(
          { message: "Duplicate entry error: The email is already in use." },
          { status: 409 }
        );
      } else if (targetField === "userId") {
        return NextResponse.json(
          { message: "Duplicate entry error: The userId is already in use." },
          { status: 409 }
        );
      } else {
        return NextResponse.json(
          { message: "Duplicate entry error: Unique constraint violation." },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      {
        message: "Failed to create supplier profile",
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
