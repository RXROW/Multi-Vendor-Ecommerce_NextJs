// @ts-nocheck
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const supplier = await db.supplierProfile.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(supplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Supplier",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingSupplier = await db.supplierProfile.findUnique({
      where: {
        id,
      },
    });

    if (!existingSupplier) {
      return NextResponse.json(
        {
          data: null,
          message: "Supplier Profile Not Found",
        },
        { status: 404 }
      );
    }
    const deleteSupplier = await db.supplierProfile.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteSupplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete the Supplier",
        error,
      },
      { status: 500 }
    );
  }
}

 // Add the update handler
export async function PUT(request, { params: { id } }) {
  try {
    const existingSupplier = await db.supplierProfile.findUnique({
      where: {
        id,
      },
    });

    if (!existingSupplier) {
      return NextResponse.json(
        {
          data: null,
          message: "Supplier Profile Not Found",
        },
        { status: 404 }
      );
    }

    // Parse the request body to get the updated supplier data
    const updatedData = await request.json();
    const {
      code,
      email,
      name,
      notes,
      phone,
      physicalAddress,
      terms,
      isActive,
      profileImageUrl,
      mainProduct,
      products,
      userId,
    } = updatedData;

    // Create an object for the updated data
    const updatedSupplier = await db.supplierProfile.update({
      where: {
        id,
      },
      data: {
        code,
        email,
        name,
        notes,
        phone,
        physicalAddress,
        terms,
        isActive,
        profileImageUrl,
        mainProduct,
        products,
        userId,
      },
    });

    return NextResponse.json(updatedSupplier);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update the Supplier",
        error,
      },
      { status: 500 }
    );
  }
}
