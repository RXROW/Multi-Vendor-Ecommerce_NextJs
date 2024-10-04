import db from "@/lib/db";
import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { NextRequest } from "next/server";

type Params = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, { params: { id } }: Params) {
  try {
    const banner = await db.banner.findUnique({
      where: {
        id,
      },
    });

    if (!banner) {
      return NextResponse.json(
        { message: "Banner Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(banner);
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to Fetch Banner",
        error: (error as Prisma.PrismaClientKnownRequestError).message,  
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params: { id } }: Params) {
  try {
    const existingBanner = await db.banner.findUnique({
      where: {
        id,
      },
    });

    if (!existingBanner) {
      return NextResponse.json(
        {
          data: null,
          message: "Banner Not Found",
        },
        { status: 404 }
      );
    }

    const deleteBanner = await db.banner.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(deleteBanner);
  } catch (error: unknown) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to delete the Banner",
        error: (error as Prisma.PrismaClientKnownRequestError).message,  
      },
      { status: 500 }
    );
  }
}
