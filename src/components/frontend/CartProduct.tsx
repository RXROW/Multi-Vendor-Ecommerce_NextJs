"use client"
import React from "react";
import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/CartSlice";

const CartProduct = ({ cartItem }: any) => {
  const dispatch = useDispatch();
  const handleCartItemDelete = (cartId: any) => {
    dispatch(removeFromCart(cartId));
  };
  const handleQtyIncrement = (cartId: any) => {
    dispatch(incrementQty(cartId));
  };
  const handleQtyDecrement = (cartId: any) => {
    dispatch(decrementQty(cartId));
  };
  return (
    <>
      <div className="flex items-center justify-between mt-4 border-b border-slate-300 dark:text-slate-400 text-slate-700 pb-3 font-semibold text-sm">
        <div className="flex items-center gap-2">
          <Image
            src={cartItem.imageUrl}
            alt={cartItem.title}
            width={249}
            height={249}
            className="rounded-md lg:w-20 lg:h-20 w-14 h-14 object-cover"
          />
          <div className="flex flex-col">
            <h3>{cartItem.title}</h3>
          </div>
        </div>
        <div className="rounded-xl border border-gray-400 flex gap-3 items-center ">
          <button  onClick={()=>handleQtyDecrement(cartItem.id)} 
          className="border-r border-gray-400 py-2 px-4">
            <Minus />
          </button>
          <p className="flex-grow lg:px-6 px-2">{cartItem.qty}</p>
          <button onClick={()=>handleQtyIncrement(cartItem.id)} 
          className="border-l border-gray-400 py-2 px-4">
            <Plus />
          </button>
        </div>
        <div className="flex items-center space-x-2 ml-3 lg:ml-0">
          <h4>${cartItem.salePrice}</h4>
          <button onClick={() => handleCartItemDelete(cartItem.id)}>
            <Trash2 className="text-red-500 w-5 h-5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
