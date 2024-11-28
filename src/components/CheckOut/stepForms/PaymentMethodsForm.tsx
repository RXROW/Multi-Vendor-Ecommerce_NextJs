"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStep, updatePaymentMethod } from "@/redux/slices/checkoutSlice";
import NavButtons from "../NavButtons";
import { Circle, CreditCard, HeartHandshake } from "lucide-react";

type PaymentMethodsFormData = {
  paymentMethod: string;
};

const paymentOptions = [
  {
    id: "cash-on-delivery",
    label: "Cash On Delivery",
    icon: <HeartHandshake className="w-12" />,
  },
  {
    id: "credit-card",
    label: "Credit Card",
    icon: <CreditCard className="w-12" />,
  },
];

export default function PaymentMethodsForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((store: any) => store.checkout.currentStep);
  const paymentMethod = useSelector((store: any) => store.checkout.paymentMethod);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentMethodsFormData>({
    defaultValues: {
      paymentMethod: paymentMethod || "",
    },
  });

  const processData: SubmitHandler<PaymentMethodsFormData> = async (data) => {
    setLoading(true);
    try {
      // Dispatch data to Redux
      dispatch(updatePaymentMethod(data));
      dispatch(setCurrentStep(currentStep + 1));
      console.log("Form data submitted:", data);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  const PaymentOption = ({
    id,
    label,
    icon,
  }: {
    id: string;
    label: string;
    icon: React.ReactNode;
  }) => (
    <li>
      <input
        type="radio"
        id={id}
        value={id}
        {...register("paymentMethod", { required: "Please select a payment method" })}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="flex items-center gap-x-5">
          {icon}
          <div className="w-full">{label}</div>
        </div>
        <Circle />
      </label>
    </li>
  );

  return (
    <form
      className="py-4 bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit(processData)}
    >
      <div className="mb-6">
        <h5 className="text-xl md:text-3xl font-bold text-lime-400">Payment Methods</h5>
      </div>

      <div className="my-6">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          Which Payment Method Do You Prefer?
        </h3>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          {paymentOptions.map((option) => (
            <PaymentOption key={option.id} id={option.id} label={option.label} icon={option.icon} />
          ))}
        </ul>
        {errors.paymentMethod && (
          <p className="mt-2 text-sm text-red-500">{errors.paymentMethod.message}</p>
        )}
      </div>

      <NavButtons
        onPrevious={handlePrevious}
        disablePrevious={currentStep <= 1}
       />
    </form>
  );
}
