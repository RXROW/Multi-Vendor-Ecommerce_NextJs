"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormHeader from "@/components/back-office/FormHeader";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";

interface NewCouponForm {
  couponCode: string;
  title: string;
  expiryDate: string;
  isActive?: boolean;
}

export default function NewCoupon() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCouponForm>({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");
  const router = useRouter();

  const redirect = () => {
    router.push("/dashboard/coupons");
  };

  const onSubmit: SubmitHandler<NewCouponForm> = async (data) => {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);

    data.couponCode = couponCode;
    data.expiryDate = isoFormattedDate;

    console.log(data);
    await makePostRequest(
      setLoading,
      "api/coupons",
      data,
      "Coupon",
      reset,
      redirect
    );
  };

  return (
    <div>
      <FormHeader title="New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Coupon Expiry"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          {/* Uncomment this if you have a ToggleInput component
          <ToggleInput
            label="Publish your Coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          /> */}
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating coupon, please wait..."
        />
      </form>
    </div>
  );
}
