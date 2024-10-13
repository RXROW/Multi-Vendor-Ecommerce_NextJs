import React from 'react'
import CartProduct from './CartProduct'

const CartItems = ({cartItems}:any) => {
  return (
    <div className="lg:col-span-8 col-span-full">
          <h2 className="py-2 mb-6 text-xl font-semibold">Your Cart</h2>
          <div className="flex items-center justify-between  border-b border-slate-300 dark:text-slate-400 text-slate-700 pb-3 font-semibold text-sm">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase ">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            {/* Cart Product */}
            {cartItems.length > 0 ? (
              cartItems.map((item: any, i: number) => (
                <CartProduct cartItem={item} key={i} />
              ))
            ) : (
              <p>No Items</p>
            )}
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

  )
}

export default CartItems