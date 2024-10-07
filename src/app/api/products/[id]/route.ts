// @ts-nocheck
import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params: { id } }) {
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "product Not Found",
        },
        { status: 404 }
      );
    }
    const deleteProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete the product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      sku,
      barcode,
      imageUrl,
      productPrice,
      salePrice,
      categoryId,
      supplierId,
      tags,
      description,
      isActive,
      isWholesale,
      wholesalePrice,
      wholesaleQty,
      unit,
      productCode,
      productStock,
      qty,
    } = await request.json();
    const existingProduct = await db.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: `Not Found`,
        },
        { status: 404 }
      );
    }

    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        title,
        slug,
        sku,
        barcode,
        imageUrl,
        productPrice,
        salePrice,
        categoryId,
        supplierId,
        tags,
        description,
        isActive,
        isWholesale,
        wholesalePrice,
        wholesaleQty,
        unit,
        productCode,
        productStock,
        qty,
      },
    });

    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Update Product",
        error,
      },
      { status: 500 }
    );
  }
}