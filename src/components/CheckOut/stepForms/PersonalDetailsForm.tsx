"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "../NavButtons";
import { setCurrentStep, updatePersonalInfo } from "@/redux/slices/checkoutSlice";

// Define the form input types
interface PersonalInfoFormValues {
  fullName: string;
  email: string;
  phone: string;
  billingAddress: string;
}

export default function PersonalInfoForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch(); // Typed dispatch
  const currentStep = useSelector((store: any) => store.checkout.currentStep); // Typed selector
  const personalInfo = useSelector((store: any) => store.checkout.personalInfo);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormValues>({
    defaultValues: {
      ...personalInfo,
    },
  });

  const processData: SubmitHandler<PersonalInfoFormValues> = (data) => {
    console.log(data);
    // Increment the current step by 1 and dispatch the action
    dispatch(setCurrentStep(currentStep + 1));
    // Update the personalInfo
    dispatch(updatePersonalInfo(data));
  };

  return (
    <form className=" py-4" onSubmit={handleSubmit(processData)}>
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-lime-400 ">
          Personal info
        </h3>
       </div>
      <div className="grid gap-x-4 gap-y-10 grid-cols-2 ">
        <TextInput
          label="Full Name"
          name="fullName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
              className="w-full"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          type="number"
          register={register}
          errors={errors}
              className="w-full"
        />
        <TextInput
          label="Billing Address"
          name="billingAddress"
          register={register}
          errors={errors}
              className="w-full"
        />
      </div>

      <NavButtons />
    </form>
  );
}
