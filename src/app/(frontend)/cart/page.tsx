'use client'

import { useSelector } from "react-redux"
 
import CartItems from "@/components/frontend/CartItems"
import CartSubTotalCard from "@/components/frontend/CartSubTotalCard"
import BreadCrump from "@/components/frontend/BreadCrump"

 

interface CartItem {
  id: string
  salePrice: number
  qty: number
  // Add other properties as needed
}

export default function Cart() {
  const cartItems = useSelector((state:any) => state.cart)

  const subTotal = cartItems.reduce((acc: number, item: CartItem) => {
    return acc + item.salePrice * item.qty
  }, 0)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <BreadCrump  />
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold ">Your cart is empty</h2>
          <p className="mt-2 text-gray-600">Add some items to your cart to get started.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <CartItems cartItems={cartItems} />
          </div>
          <div className="lg:col-span-4">
            <CartSubTotalCard subTotal={subTotal.toFixed(2)} />
          </div>
        </div>
      )}
    </div>
  )
}