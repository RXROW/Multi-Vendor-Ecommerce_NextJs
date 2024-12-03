import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
 
export async function GET(request:NextRequest, { params: { id } }:any) {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
      },
      include: {  
        orderItem: true
      },
    });
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch Order ",
        error,
      },
      { status: 500 }
    );
  }
}
 
export async function DELETE(request:NextRequest, { params: { id } }:any) {
  try {
    const existingOrder = await db.order.findUnique({
      where: {
        id,
      },
    });

    // Check if market exists
    if (!existingOrder) {
      return NextResponse.json(
        {
          data: null,
          message: "Order Not Found",
        },
        { status: 404 }
      );
    }

    const deleteOrder = await db.order.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteOrder);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete the Order",
        error,
      },
      { status: 500 }
    );
  }
}
 
// export async function PUT(request:NextRequest, { params: { id } }:any) {
//   try {
//     const existingMarket = await db.market.findUnique({
//       where: {
//         id,
//       },
//     });
 
//     if (!existingMarket) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: "Market Not Found",
//         },
//         { status: 404 }
//       );
//     }

//     const requestBody = await request.json();
 
//     const {
//       title,
//       logoUrl,
//       description,
//       isActive,
//       categoryIds,
//     }: {
//       title: string;
//       logoUrl: string;
//       description: string;
//       isActive: boolean;
//       categoryIds: string[];
//     } = requestBody;
 
//     const updatedMarket = await db.market.update({
//       where: {
//         id,
//       },
//       data: {
//         title,
//         slug: generateSlug(title), 
//         logoUrl,
//         description,
//         isActive,
//         categories: {
//           connect: categoryIds.map((categoryId) => ({ id: categoryId })), 
//         },
//       },
//     });

//     return NextResponse.json(updatedMarket);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to update the Market",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
