"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "../NavButtons";
import { setCurrentStep, updatePersonalInfo } from "@/redux/slices/checkoutSlice";
import { useSession } from "next-auth/react";

// Define the form input types
interface PersonalInfoFormValues {
  fullName: string;
  email: string;
  phone: string;
  userId:any;
  billingAddress: string;
}

export default function PersonalInfoForm() {
  const {data:session,status}=useSession();
  const userId=session?.user.id
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((store: any) => store.checkout.currentStep);
  const personalInfo = useSelector((store: any) => store.checkout.personalInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoFormValues>({
    defaultValues: {
      ...personalInfo,
    },
  });

  const processData: SubmitHandler<PersonalInfoFormValues> = (data) => {
    setLoading(true);
    try {
      console.log(data);
      data.userId=userId;
      // Update Redux with personal info
      dispatch(updatePersonalInfo(data));
      // Move to the next step
      dispatch(setCurrentStep(currentStep + 1));
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      dispatch(setCurrentStep(currentStep - 1));
    }
  };

  return (
    <form
      className="py-4 bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit(processData)} // Handle form submission
    >
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-xl md:text-3xl font-bold text-lime-400">
          Personal Info
        </h3>
      </div>

      {/* Form Fields */}
      <div className="grid gap-x-4 gap-y-10 grid-cols-2">
        <TextInput
          label="Frist Name"
          name="fristName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Last Name"
          name="lastName"
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
       
      </div>

      {/* Navigation Buttons */}
      <NavButtons
        onPrevious={handlePrevious}
        disablePrevious={currentStep <= 1}
      />
    </form>
  );
}
