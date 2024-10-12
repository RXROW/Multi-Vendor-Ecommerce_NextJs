"use client";
import BreadCrump from "@/components/frontend/BreadCrump";
import CartProduct from "@/components/frontend/CartProduct";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store:any)=>store.cart);
  console.log("cartItem"+cartItems)
  return (
    <div>
       <BreadCrump/> 
      <div className="grid grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-full">
          <h2 className="py-2 mb-6 text-xl font-semibold">Your Cart</h2>
          <div className="flex items-center justify-between  border-b border-slate-300 dark:text-slate-400 text-slate-700 pb-3 font-semibold text-sm">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase ">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* Cart Product */}
            {cartItems.length>0?cartItems.map((item:any,i:number)=><CartProduct cartItem={item} key={i}/>):<p>No Items</p>}
   
             
          </div>
          {/* Coupon Form */}
          <div className="flex items-center gap-2 py-8">
            <input
              type="text"
              id="email"
              aria-describedby="helper-text-explanation"
              className="bg-gray-50 border focus:outline-none border-gray-300 w-1/2 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:ring-1   block  p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   "
              placeholder="Enter Coupon"
            />
            <button className="shrink-0 px-4 py-2.5 rounded-md bg-green-600 text-white ">
              Apply Coupon
            </button>
          </div>
        </div>

        <div className="lg:col-span-4 col-span-full  p-5 pb-8 bg-white border border-gray-300 rounded-lg   dark:bg-gray-800 dark:border-gray-700 overflow-hidden dark:text-slate-100 text-slate-800 font-bold">
          <h2 className="text-2xl pb-3">Cart total</h2>

          <div className="flex items-center justify-between border-b border-gray-600 pb-6">
            <span> Subtotal </span>
            <span> $589</span>
          </div>
          <div className="flex items-center justify-between  pb-4 mt-3">
            <span> Tax </span>
            <span> $0</span>
          </div>
          <div className="flex items-center justify-between  pb-4">
            <span> Shipping in US </span>
            <span> $19</span>
          </div>
          <p className=" border-b border-gray-600 pb-6 dark:text-slate-400 text-slate-600 font-normal">
            We only charge for shipping when you have over 2kg items
          </p>
          <div className="flex items-center justify-between  pb-4 my-6">
            <span> Total </span>
            <span> $600</span>
          </div>
          <Link
            href="#"
            className="bg-slate-200 text-slate-900 rounded-md py-4 px-4  w-full text-center font-bold transition-all hover:bg-black hover:text-white"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}