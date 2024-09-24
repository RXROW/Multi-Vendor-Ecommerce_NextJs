"use client";

import FormHeader from "@/components/back-office/FormHeader";
import ImageInput from "@/components/FormInputs/ImageInput";
import QuillEditor from "@/components/FormInputs/QuillEditor";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define types for the form data
interface FormData {
  slug: string;
  title: string;
  categoryId: number;
  description: string;
  content: string;
  imageUrl: string;
  isActive: boolean;
}

// Define type for category
interface Category {
  id: number;
  title: string;
}

export default function NewTraining() {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const categories: Category[] = [
    { id: 1, title: "Category 1" },
    { id: 2, title: "Category 2" },
    { id: 3, title: "Category 3" },
  ];

  const [loading, setLoading] = useState<boolean>(false);

  // React Hook Form with default values
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

  // Watch the "isActive" field
  const isActive = watch("isActive");
  const router = useRouter();
  const redirect = () => {
    router.push("/dashboard/community");
  };
  // Submit handler with type for form data
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;

    console.log(data);

    // Submit the form data
    makePostRequest(setLoading, "api/trainings", data, "Training", reset ,redirect);

    // Reset form fields after submission
    setImageUrl("");
    setContent("");
  };

  return (
    <div>
      <FormHeader title="New Training" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label="Training Thumbnail"
          />
          <QuillEditor
            label="Training Content"
            value={content}
            onChange={setContent}
          />
          <ToggleInput
            label="Publish your Training"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating training, please wait.."
        />
      </form>
    </div>
  );
}
