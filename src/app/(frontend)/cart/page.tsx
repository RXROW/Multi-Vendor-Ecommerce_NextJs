 
import BreadCrump from "@/components/frontend/BreadCrump";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
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
            {/* Cart 1 */}
            <div className="flex items-center justify-between mt-4 border-b border-slate-300 dark:text-slate-400 text-slate-700 pb-3 font-semibold text-sm">
              <div className="flex items-center gap-2">
                <Image
      src="/pexels-02.jpg"
        
                  alt="product image"
                  width={249}
                  height={249}
                  className="rounded-md lg:w-20 lg:h-20 w-14 h-14 object-cover"
                />
                <div className="flex flex-col">
                  <h3>Apple Watch Series 7 - 44mm</h3>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center ">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow lg:px-6 px-2">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center space-x-2 ml-3 lg:ml-0">
                <h4>$259.00</h4>
                <button>
                  <Trash2 className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </div>
            {/* Cart 2 */}
            <div className="flex items-center justify-between mt-4 border-b border-slate-300 dark:text-slate-400 text-slate-700 pb-3 font-semibold text-sm">
              <div className="flex items-center gap-2">
                <Image
                        src="/pexels-02.jpg"
        
                  alt="product image"
                  width={249}
                  height={249}
                  className="rounded-md lg:w-20 lg:h-20 w-14 h-14 object-cover"
                />
                <div className="flex flex-col">
                  <h3>Apple Watch Series 7 - 44mm</h3>
                  <small>Golden</small>
                </div>
              </div>
              <div className="rounded-xl border border-gray-400 flex gap-3 items-center ">
                <button className="border-r border-gray-400 py-2 px-4">
                  <Minus />
                </button>
                <p className="flex-grow lg:px-6 px-2">1</p>
                <button className="border-l border-gray-400 py-2 px-4">
                  <Plus />
                </button>
              </div>
              <div className="flex items-center space-x-2 ml-3 lg:ml-0">
                <h4>$259.00</h4>
                <button>
                  <Trash2 className="text-red-500 w-5 h-5" />
                </button>
              </div>
            </div>
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