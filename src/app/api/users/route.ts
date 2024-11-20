import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
 

export async function GET(request: NextRequest) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
        error,
      },
      { status: 500 }
    );
  }
}
