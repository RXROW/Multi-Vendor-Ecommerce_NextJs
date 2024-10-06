import db from "@/lib/db";
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';
import { NextRequest, NextResponse } from "next/server";
import Joi from 'joi';

const staffSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  nin: Joi.string().length(9).required(),  
  dob: Joi.date().iso().required(),  
  password: Joi.string().min(6).max(100).required(),  
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required(), 
  physicalAddress: Joi.string().allow('').max(255), 
  notes: Joi.string().allow('').max(500),  
  isActive: Joi.boolean().required(),
  code: Joi.string().optional()  
});
export async function POST(req: NextRequest) {
  try {
     const body = await req.json();
     const { error, value } = staffSchema.validate(body);
    if (error) {
      return NextResponse.json({ message: error.details[0].message }, { status: 400 });
    }
    const { name, nin, dob, password, email, phone, physicalAddress, notes, isActive, code } = value;
     console.log("Creating new staff with the following details:", { name, email, phone });
    const hashedPassword = await bcrypt.hash(password, 10);
    const newStaff = await db.staff.create({
      data: {
        id: new ObjectId().toString(),  
        name,
        nin,
        dob: new Date(dob),
        password: hashedPassword,
        email,
        phone,
        physicalAddress,
        notes,
        isActive,
        code,
      },
    });

    return NextResponse.json(newStaff, { status: 201 });
  } catch (error) {
    console.error("Error creating staff:", error);
    return NextResponse.json({ message: "Error creating staff", error }, { status: 500 });
  }
}

 

export async function GET(request: any) {
  try {
    const staffs = await db.staff.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(staffs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Fetch staffs",
        error,
      },
      { status: 500 }
    );
  }
}
