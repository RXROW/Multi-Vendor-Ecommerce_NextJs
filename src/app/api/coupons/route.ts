import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, couponCode, expiryDate, isActive } = await request.json();
    
    const newCoupon = await db.coupon.create({
      data: {
        title,
        couponCode,
        expiryDate: new Date(expiryDate),
        isActive,
        // No need to set createdAt or updatedAt manually
      },
    });
    
    return NextResponse.json(newCoupon, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create new Coupon!", error },
      { status: 500 }
    );
  }
}
