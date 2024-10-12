"use client"
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const CartCount = () => {
  const cartItem=useSelector((store:any)=>store.cart)
  return (
    <div>
        <Link
            href="/cart"
            type="button"
            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
          >
            <ShoppingCart className="text-green-700 dark:text-green-500" />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
              {cartItem.length}
            </div>
          </Link>
    </div>
   )
}

export default CartCount