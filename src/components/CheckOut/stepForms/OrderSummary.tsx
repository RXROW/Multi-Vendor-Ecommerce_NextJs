import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import { ChevronRight, LucideAlignHorizontalSpaceBetween } from "lucide-react";
 import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface CartItem {
  imageUrl: string;
  title: string;
  qty: number;
  salePrice: number;
}

interface RootState {
  cart: CartItem[];
  checkout: {
    combinedData: Record<string, any>;
  };
}

const OrderSummary = () => {
  const [loading, setLoading] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart);
  const combinedData = useSelector((state: RootState) => state.checkout.combinedData);
  const router = useRouter();
  const submitData = async () => {
    const data = {
      combinedData,
      cartItems
    };
    
    try {
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      setLoading(false);
      const responseData= await response.json()
      if (response.ok) {
        toast.success(`New Order Created Successfully`);
        router.push(`order-confirmed/${responseData.id}`)
     
         
   
      } else {
        if (response.status === 409) {
          toast.error("The Giving Warehouse Stock is NOT Enough");
        } else {
          toast.error("Something went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }
  

  return (
    <div className="p-6 rounded-lg max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-lime-400 dark:text-lime-400 mb-6 border-b pb-2 border-gray-200 dark:border-gray-700">
        Order Summary
      </h1>

      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((cartItem: CartItem, i: number) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-md shadow-sm"
            >
              <Image
                src={cartItem.imageUrl}
                alt={cartItem.title}
                width={80}
                height={80}
                className="rounded-lg object-cover w-20 h-20"
              />

              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {cartItem.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Quantity: <span className="font-medium">{cartItem.qty}</span>
                </p>
              </div>

              <div className="text-right">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                  ${cartItem.salePrice.toFixed(2)}
                </h4>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 text-center mt-6">
            Your cart is empty.
          </p>
        )}
      </div>

      <button
        onClick={submitData}
        disabled={loading}
        className="flex items-center px-5 py-2 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-slate-900 rounded-lg focus:ring-4 focus:ring-green-200 dark:focus:ring-green-900 hover:bg-slate-800 dark:bg-green-600 dark:hover:bg-green-700"
      >
        {loading ? "Processing Please Wait..." : "Proceed to Payment"}
        {!loading && <ChevronRight className="w-5 h-5 ml-2" />}
      </button>
    </div>
  );
};

export default OrderSummary;