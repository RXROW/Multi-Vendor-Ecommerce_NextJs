"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateShippingInfo,
} from "@/redux/slices/checkoutSlice";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "../NavButtons";
 
 
export default function ShippingInfoForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((store: any) => store.checkout.currentStep);
  const shippingInfo = useSelector((store: any) => store.checkout.shippingInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...shippingInfo,
     },
  });

  async function processData(data: any) {
    setLoading(true);
    try {
      // Dispatch data to Redux
      dispatch(updateShippingInfo(data));
      dispatch(setCurrentStep(currentStep + 1));
      console.log("Form data submitted:", data);
    } finally {
      setLoading(false);
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  return (
    <form
      className="py-4 bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit(processData)} // Ensure form submission
    >
      {/* Form fields */}
      <div className="mt-12 grid gap-x-4 gap-y-10 grid-cols-2">
        <TextInput label="Street Address" name="streetAddress" register={register} errors={errors} className="w-full" />
        <TextInput label="City" name="city" register={register} errors={errors} className="w-full" />
        <TextInput label="Country" name="country" register={register} errors={errors} className="w-full" />
        <TextInput label="District" name="district" register={register} errors={errors} className="w-full" />
      </div>   
      {/* Nav Buttons */}
      <NavButtons onPrevious={handlePrevious} disablePrevious={currentStep <= 1} />
    </form>
  );
}
