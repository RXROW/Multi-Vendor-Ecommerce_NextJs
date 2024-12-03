import { NextRequest, NextResponse } from "next/server";
import db from "@/lib/db";

function generateOrderNumber(length:number) {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let orderNumber = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderNumber += characters.charAt(randomIndex);
  }

  return orderNumber;
}








export async function POST(request: NextRequest) {
  try {
    const { combinedData, cartItems } = await request.json();
    
    const {
      city,
      country,
      district,
      email,
      fristName, // Fixed typo
      lastName,
      paymentMethod,
      phone,
      streetAddress,
      userId,
    } = combinedData;

    if (!userId || !fristName || !lastName || !email || !phone || !streetAddress || !city || !country) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const newOrder = await db.order.create({
      data: {
        userId,
        fristName, 
        lastName,
        emailAddress: email,
        phoneNumber: phone,
        streetAddress,
        city,
        country,
        district,
        shippingCost: 10.99,
        paymentMethod,
      },
    });

    // Create order items using cartItems  
  const newOrderItems  =   await db.orderItem.createMany({
      data: cartItems.map((item:any) => ({  
        productId:item.id,
        quantity:parseInt(item.qty),
        price:parseFloat(item.salePrice),  
        orderId: newOrder.id,
        imageUrl: item.imageUrl,
        title: item.title,
        orderNumber:generateOrderNumber(8),
      })),
    });
    console.log("Form DB=> "+newOrder,newOrderItems)

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { message: "Failed to create order", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
 
export async function GET(request: NextRequest) {
  try {
    const orders = await db.order.findMany({
      include: {  
        orderItem: true
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { message: "Failed to fetch orders", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}