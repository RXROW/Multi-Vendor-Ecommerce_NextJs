import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const newCategory = { title, slug, imageUrl, description, isActive };
    console.log(newCategory)
    return NextResponse.json(newCategory);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create new Category! ", error },
      { status: 500 }
    );
  }
}
