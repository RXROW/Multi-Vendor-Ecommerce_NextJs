import db from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"; 
 

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret"; 

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();
    const user = await db.user.findUnique({
      where: { email },
    });

 
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expiration (1 hour)
    );

    // Respond with the token and user info
    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Login failed", error },
      { status: 500 }
    );
  }
}
