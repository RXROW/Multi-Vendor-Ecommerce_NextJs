"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import FormHeader from "@/components/back-office/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";

// Type definitions for the form inputs and categories
interface Category {
  id: string;
  name: string;
}

interface FormData {
  title: string;
  categoryIds: string[];
  description: string;
  isActive: boolean;
  logoUrl: string;
  slug: string;
}

interface NewMarketFormProps {
  categories: Category[] | any;
}

export default function NewMarketForm({ categories }: NewMarketFormProps) {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      isActive: true,
    },
  });

  const isActive = watch("isActive");

  // Function to handle redirect after successful form submission
  const redirect = () => {
    router.push("/dashboard/markets");
  };

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    try {
      const slug = generateSlug(data.title);
      const formData = { ...data, slug, logoUrl };

      // Make the POST request
      await makePostRequest(setLoading, "api/markets", formData, "Market", reset, redirect);
      setLogoUrl("");
    } catch (error) {
      console.error("Error creating market:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-3">
      <FormHeader title="New Market" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        aria-label="New Market Form"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Market Title Input */}
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
            aria-required="true"
            aria-invalid={!!errors.title}
          />

          {/* Category Selection Input */}
          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple
            aria-required="true"
            aria-invalid={!!errors.categoryIds}
          />

          {/* Market Logo Input */}
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
            label="Market Logo"
          />

          {/* Market Description Input */}
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
            aria-required="true"
            aria-invalid={!!errors.description}
          />

          {/* Market Status Toggle */}
          <ToggleInput
            label="Market Status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
            aria-checked={isActive}
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating market, please wait..."
        />
      </form>
    </div>
  );
}
