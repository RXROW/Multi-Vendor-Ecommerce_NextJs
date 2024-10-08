import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { generateSlug } from "@/lib/generateSlug"; 
 
export async function GET(request:NextRequest, { params: { id } }:any) {
  try {
    const market = await db.market.findUnique({
      where: {
        id,
      },
    });
    
    // Check if market exists
    if (!market) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Not Found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Market",
        error,
      },
      { status: 500 }
    );
  }
}
 
export async function DELETE(request:NextRequest, { params: { id } }:any) {
  try {
    const existingMarket = await db.market.findUnique({
      where: {
        id,
      },
    });

    // Check if market exists
    if (!existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Not Found",
        },
        { status: 404 }
      );
    }

    const deleteMarket = await db.market.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete the Market",
        error,
      },
      { status: 500 }
    );
  }
}
 
export async function PUT(request:NextRequest, { params: { id } }:any) {
  try {
    const existingMarket = await db.market.findUnique({
      where: {
        id,
      },
    });
 
    if (!existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market Not Found",
        },
        { status: 404 }
      );
    }

    const requestBody = await request.json();
 
    const {
      title,
      logoUrl,
      description,
      isActive,
      categoryIds,
    }: {
      title: string;
      logoUrl: string;
      description: string;
      isActive: boolean;
      categoryIds: string[];
    } = requestBody;
 
    const updatedMarket = await db.market.update({
      where: {
        id,
      },
      data: {
        title,
        slug: generateSlug(title), 
        logoUrl,
        description,
        isActive,
        categories: {
          connect: categoryIds.map((categoryId) => ({ id: categoryId })), 
        },
      },
    });

    return NextResponse.json(updatedMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update the Market",
        error,
      },
      { status: 500 }
    );
  }
}
