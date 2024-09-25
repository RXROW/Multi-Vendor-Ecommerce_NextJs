import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { title, link, imageUrl, isActive } = await request.json();

    // Creating a new banner in the database
    const newBanner = await db.banner.create({
      data: {
        title,
        link,
        imageUrl,
        isActive,
      },
    });

    console.log(newBanner);

    // Return success response
    return NextResponse.json(newBanner);
  } catch (error) {
    console.error("Error creating banner:", error);

    // Return error response
    return NextResponse.json(
      {
        message: "Failed to create banner",
      },
      { status: 500 }
    );
  }
}



export async function GET(request: NextRequest) {
  try {
    const banners = await db.banner.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(banners);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch banner",
        error,
      },
      { status: 500 }
    );
  }
}