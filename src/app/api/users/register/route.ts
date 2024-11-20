import db from "@/lib/db";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
 
export default async function handler(req:NextRequest, res:any ) {
  if (req.method === "POST") {
    try {
      const { name, email, password, role }:any = req.body;

      const existingUser = await db.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.json({ message: "User already exists" }, { status: 409 });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create the new user
      const newUser = await db.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
        },
      });

      // Generate JWT
      const token = jwt.sign(
        { id: newUser.id, email: newUser.email, role: newUser.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      // Respond with the token and user info
      return res.status(201).json({
        message: "Registration successful",
        token,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      });
    } catch (error) {
      console.error(error);
      return res.json({ message: "Registration failed" }, { status: 500 } , error);

     }
  } else {
    return res.json();
  }
}
