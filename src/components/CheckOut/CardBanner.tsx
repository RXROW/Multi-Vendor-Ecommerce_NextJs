"use client";

import { CartItem } from "@/app/(frontend)/cart/page";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CardBanner: React.FC = () => {
  const cartItems: CartItem[] = useSelector((state: any) => state.cart);
   const subTotal = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.salePrice * item.qty;
  }, 0);
  const totalItems = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.qty;
  }, 0);

  return (
    <div className="my-5 bg-gray-100 dark:bg-gray-700 rounded-xl">
      <div className="p-4">
        <div className="sm:flex sm:items-center sm:justify-center">
          {/* Cart Icon and Summary */}
          <div className="flex items-center flex-1">
            <div className="inline-flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full w-9 h-9 text-gray-50">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <p className="ml-3 text-balance font-normal">
              You have {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart,
              Subtotal is{" "}
              <span className="font-bold">${subTotal.toFixed(2)}</span>.
            </p>
          </div>
          {/* Edit Cart Button */}
          <div className="mt-4 sm:mt-0">
            <Link
              href="/cart"
              className="inline-flex items-center py-2 px-4 text-sm font-bold transition-all duration-200 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-600 hover:bg-white focus:outline-none focus:ring focus:ring-blue-500"
            >
              Edit Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBanner;
