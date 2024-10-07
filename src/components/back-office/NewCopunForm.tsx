 
"use client";

import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { convertIsoDateToNormal } from "@/lib/convertIsoDateToNormal";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function CouponForm({
  updatedData = {},
}: {
  updatedData?: any;
}) {
  const expiryDateNormal = convertIsoDateToNormal(updatedData.expiryDate);
  updatedData.expiryDate = expiryDateNormal;
  const [loading, setLoading] = useState(false);
  const id = updatedData?.id ?? "";
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updatedData,
    },
  });

  const isActive = watch("isActive");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/coupons");
  }

  async function onSubmit(data: any) {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);

    data.couponCode = couponCode;
    data.expiryDate = isoFormattedDate;

    if (id) {
      makePutRequest(setLoading, `api/coupons/${id}`, data, "Coupon",redirect);
    } else {
      makePostRequest(
        setLoading,
        "api/coupons",
        data,
        "Coupon",
        reset,
        redirect
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
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
          label="Coupon Expiry Date"
          name="expiryDate"
          type="date"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ToggleInput
          label="Publish your Coupon"
          name={"isActive"}
          isActive={isActive}
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Coupon" : "Create Coupon"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Coupon please wait...`}
      />
    </form>
  );
}