import db from "@/lib/db";
import { NextResponse } from "next/server";

// Define the expected shape of the product data
interface ProductData {
  title: string;
  slug: string;
  sku?: string;
  barcode?: string;
  imageUrl?: string;
  productPrice: number;
  salePrice?: number;
  categoryId: string;
  supplierId: string;  
  tags?: string[];
  userId: string; 
  description?: string;
  isActive: boolean;
  isWholesale: boolean;
  wholesalePrice?: number;
  wholesaleQty?: number;
  unit?: string;
  productCode?: string;
  productStock: number;
  qty: number;
}

export async function POST(request: Request) {
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
      userId,
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
    }: ProductData = await request.json();

    // Check if the product already exists in the database
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });

    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }

    // Use ProductUncheckedCreateInput (categoryId directly instead of relation)
    const newProduct = await db.product.create({
      data: {
        title,
        slug,
        sku,
        userId,
        barcode,
        imageUrl,
        productPrice: parseFloat(productPrice.toString()),
        salePrice: salePrice ? parseFloat(salePrice.toString()) : null,
        categoryId, // Use categoryId directly
        tags,
        description,
        isActive,
        isWholesale,
        wholesalePrice: wholesalePrice ? parseFloat(wholesalePrice.toString()) : null,
        wholesaleQty: wholesaleQty ? parseInt(wholesaleQty.toString()) : null,
        unit,
        productCode,
        productStock: parseInt(productStock.toString()),
        qty: parseInt(qty.toString()),
      },
    });

    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create product",
        error: error.message || error,
      },
      { status: 500 }
    );
  }
}
 
export async function GET(request: any) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch suppliers",
        error,
      },
      { status: 500 }
    );
  }
}
