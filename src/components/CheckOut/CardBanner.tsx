import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CardBanner = () => {
  return (
    <div className=' my-5 bg-gray-100 dark:bg-gray-700 rounded-xl '>
      <div className=" p-4">
        <div className=" sm:flex sm:items-center sm:justify-center">
          <div className=" flex items-center flex-1">
            <div className=" inline-flex items-center justify-center flex-shrink-0 bg-gray-400 rounded-full w-9 h-9 text-gray-50 ">
              <ShoppingBag className=' w-6 h-6'/>
            </div>
            <p className=" ml-3 text-balance font-normal">
              You have 4 items in cart, Sub total is {""} <span className=' font-bold'>$399</span>
            </p>
          </div>
          <div className=" mt-4 sm:mt-0">
            <Link href="/cart" className=' inline-flex items-center py-2 px-4 text-sm font-bold transition-all duration-200 border border-gray-300 rounded-md bg-gray-50 dark:bg-gray-600 hover:bg-white  hover:focus:outline-none focus:right-1 focus:text-blue-500 focus:ring-gray-500 ' 
            >Edit Cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardBanner