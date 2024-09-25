import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
 

    const newCategory = await db.category.create({
      data: {
        title,
        slug,
        imageUrl,
        description,
        isActive: isActive ?? true,
      },
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating category:", error);
    return NextResponse.json(
      { message: "Failed to create new Category!", error },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching categories:", error);
    return NextResponse.json(
      { message: "Failed to fetch categories!", error },
      { status: 500 }
    );
  }
}
