 
"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
 
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function NewCategoryForm({ updateData = {} }:any) {
  const initialImageUrl  = updateData?.imageUrl ?? "";
  const id = updateData?.id ?? "";

  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/categories");
  }
  async function onSubmit(data: any) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    // console.log(data);

    if (id) {
      data.id = id;
      // Make Put Request
      makePutRequest(
        setLoading,
        `api/categories/${id}`,
        data,
        "Category",
        redirect
      );
    } else {
      // Make Post Request
      makePostRequest(
        setLoading,
        "api/categories",
        data,
        "Category",
        reset,
        redirect
      );
    }
    setImageUrl("");
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />

       
          <ImageInput
            label="Category Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
          />
          <ToggleInput
            label="Publish your Category"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle={id ? "Update Category" : "Create Category"}
          loadingButtonTitle={`${
            id ? "Updating" : "Creating"
          } Category please wait...`}
        />
      </form>
    </div>
  );
}