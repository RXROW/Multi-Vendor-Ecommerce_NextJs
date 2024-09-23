import { NextRequest, NextResponse } from "next/server";

 
interface Product {
  id: number;
  title: string;
  slug: string;
  images: string[]; 
  sku: string;
  barcode: string;
  description: string;
  productPrice: number;
  salePrice: number;
  isActive: boolean;
  categoryId: number | null;  
  farmerId: number | null;  
  tags: string[];            
}

export async function POST(request: NextRequest) {
  try {
    const productData: Product = await request.json();
    const newProduct: Product = {
      id: productData.id,
      title: productData.title,
      slug: productData.slug,
      images: productData.images,  
      sku: productData.sku,
      barcode: productData.barcode,
      description: productData.description,
      productPrice: productData.productPrice,
      salePrice: productData.salePrice,
      isActive: productData.isActive,
      categoryId: productData.categoryId,
      farmerId: productData.farmerId,
      tags: productData.tags,      
    };
    console.log(newProduct);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.error(error);
   return NextResponse.json(
      {
        message: "Failed to create product",
        error,
      },
      { status: 500 }
    );
  }
}
