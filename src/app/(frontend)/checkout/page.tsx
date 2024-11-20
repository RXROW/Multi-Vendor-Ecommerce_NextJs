import CardBanner from "@/components/CheckOut/CardBanner";
import StepForm from "@/components/CheckOut/StepForm";
import Steps from "@/components/CheckOut/Steps";
import React from "react";

const CheckOut = () => {
  const steps = [
    { label: "Personal Information", href: "/personal-info" },
    { label: "Shipping Address", href: "/shipping-address" },
    { label: "Payment Method", href: "/payment-method" },
    { label: "Order Summary", href: "/order-summary" },
  ];

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-slate-900 
    rounded-md flex flex-col items-center p-4"
    >
      <div className="max-w-3xl p-4 my-6 mx-auto border rounded-sm">
        {/* Steps Component */}
        <Steps steps={steps} /> {/* Assuming 4 items in the cart */}
        <div className=" w-full p-4 bg-white   dark:bg-gray-800 dark:border-gray-700  rounded-lg shadow sm:p-6 nd:p-8 my-4 ">
          {/* Banner */}
          <CardBanner/>
          <h2>Card</h2>
        {/* Forms */}
        <StepForm/>
        </div>

      </div>
    </div>
  );
};

export default CheckOut;
