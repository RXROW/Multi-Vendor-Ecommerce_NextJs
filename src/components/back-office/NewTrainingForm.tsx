"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormHeader from "./FormHeader";
import TextareaInput from "../FormInputs/TextAreaInput";

const QuilEditor = dynamic(() => import("@/components/FormInputs/QuillEditor"), {
  ssr: false,
});

type FormData = {
  content: string;
  imageUrl: string;
  slug: string;
  title: string;
  description: string;
  id:any;
  categoryId: string;
  isActive: boolean;
};

type Category = {
  id: string;
  name: string;
};

export default function NewTrainingForm({ categories }: { categories:any }) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      isActive: true,
    },
  });

  const router = useRouter();
  const isActive = watch("isActive");

  // Redirect after successful form submission
  function redirect() {
    router.push("/dashboard/community");
  }

  // Form submit handler
  async function onSubmit(data: FormData) {
    // Generate slug from the title
    const slug = generateSlug(data.title);
    
    // Append additional data
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;

    console.log(data);

    // Make post request to the API
    makePostRequest(
      setLoading,
      "api/trainings",
      data,
      "Training",
      () => {
        reset(); // Reset form after submission
        setImageUrl(""); // Clear image
        setContent("");  // Clear content
      },
      redirect
    );
  }

  return (
    <div>
      {/* Form Header */}
      <FormHeader title="New Training" />
      
      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {/* Title */}
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />

          {/* Category Selection */}
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            options={categories}
            className="w-full"
            errors={errors}
          />

          {/* Description */}
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />

          {/* Image Input */}
          <ImageInput
            label="Training Thumbnail"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
          />

          {/* Content Editor */}
          <QuilEditor
            label="Training Content"
            value={content}
            onChange={setContent}
          />

          {/* Toggle Publish */}
          <ToggleInput
            label="Publish your Training"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating Training, please wait..."
        />
      </form>
    </div>
  );
}
