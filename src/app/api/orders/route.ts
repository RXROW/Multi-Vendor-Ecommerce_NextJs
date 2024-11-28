// import { NextRequest, NextResponse } from "next/server";
// import db from "@/lib/db";

// export async function POST(request: NextRequest) {
//   try {
//     const {

//      } =  await request.json();
   
//     if (!categoryIds || !Array.isArray(categoryIds)) {
//       return NextResponse.json(
//         { message: "Invalid category IDs provided" },
//         { status: 400 }
//       );
//     }
//     const newMarket = await db.market.create({
//       data: {
//         title,
//          logoUrl,
//         description,
//         isActive,
//         categoryIds,
//       },
//     });
//     return NextResponse.json(newMarket, { status: 201 });
//   } catch (error) {
//     console.error("Error creating market:", error);
//     return NextResponse.json(
//       {
//         message: "Failed to create market",
//         error: error,
//       },
//       { status: 500 }
//     );
//   }
// }


// // export async function GET(request:NextRequest) {
// //   try {
// //     const markets = await db.market.findMany({
// //       orderBy: {
// //         createdAt: "desc",
// //       },
// //     });
// //     return NextResponse.json(markets);
// //   } catch (error) {
// //     console.log(error);
// //     return NextResponse.json(
// //       {
// //         message: "Failed to fetch markets",
// //         error,
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }