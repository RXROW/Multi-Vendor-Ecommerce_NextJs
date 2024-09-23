 
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { title, couponCode, expiryDate, isActive } =
      await request.json();
    const NewCoupon = { title, couponCode, expiryDate, isActive};
    console.log(NewCoupon)
    return NextResponse.json(NewCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Failed to create new Coupon! ", error },
      { status: 500 }
    );
  }
}



 