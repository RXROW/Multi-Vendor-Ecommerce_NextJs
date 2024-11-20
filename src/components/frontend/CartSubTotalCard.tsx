import React from 'react';
import Link from 'next/link';

const CartSubTotalCard = ({ subTotal }: any) => {
  const taxRate = 0.1; // 10% tax
  const shipping = 19; // Flat shipping rate
  const tax = (subTotal * taxRate).toFixed(2);
  const total = (parseFloat(subTotal) + parseFloat(tax) + shipping).toFixed(2); // Calculate total

  return (
    <div className="lg:col-span-4 col-span-full p-5 pb-8 bg-white border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden dark:text-slate-100 text-slate-800 font-bold">
      <h2 className="text-2xl pb-3">Cart total</h2>

      <div className="flex items-center justify-between border-b border-gray-600 pb-6">
        <span>Subtotal</span>
        <span>${subTotal}</span>
      </div>

      <div className="flex items-center justify-between pb-4 mt-3">
        <span>Tax</span>
        <span>${tax}</span>
      </div>

      <div className="flex items-center justify-between pb-4">
        <span>Shipping in US</span>
        <span>${shipping}</span>
      </div>

      <p className="border-b border-gray-600 pb-6 dark:text-slate-400 text-slate-600 font-normal">
        We only charge for shipping when you have over 2kg items
      </p>

      <div className="flex items-center justify-between pb-4 my-6">
        <span>Total</span>
        <span>${total}</span>
      </div>

      <Link
        href="/checkout"
        className="bg-slate-200 text-slate-900 rounded-md py-4 px-4 w-full text-center font-bold transition-all hover:bg-black hover:text-white"
      >
        Continue to Payment
      </Link>
    </div>
  );
};

export default CartSubTotalCard;
