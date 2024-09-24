"use client";

import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewSupplierForm() {
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });

  const router = useRouter();

  function redirect() {
    router.push("/dashboard/suppliers");
  }

 
  const isActive = watch("isActive");

  async function onSubmit(data: any) {
    data.products = products;
    data.profileImageUrl = profileImageUrl;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/suppliers",
      data,
      "Supplier Profile",
      reset,
      redirect
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Supplier's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Supplier's Email"
          name="email"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Supplier's Phone"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Supplier's Address"
          name="address"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Main Product"
          name="product"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
        />
        <ImageInput
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint="supplierProfileUploader"
          label="Supplier Profile Image"
        />
        <TextareaInput
          label="Supplier's Payment Terms (optional)"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <TextareaInput
          label="Supplier's Notes (optional)"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />
        <ToggleInput
          label="Supplier Status"
          name="isActive"
          trueTitle="Active"
          falseTitle="Inactive"
          register={register}
        />
      </div>

      <SubmitButton
        isLoading={loading}
        buttonTitle="Create Supplier"
        loadingButtonTitle="Creating supplier, please wait.."
      />
    </form>
  );
}
