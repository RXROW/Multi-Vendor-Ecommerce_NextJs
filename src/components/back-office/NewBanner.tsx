// @ts-nocheck
"use client";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BannerForm({ updateData = {} }) {
  const initialImageUrl = updateData?.imageUrl ?? "";
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
    router.refresh()
    router.push("/dashboard/banners");
  }
  async function onSubmit(data: any) {
    data.imageUrl = imageUrl;
    console.log(data);

    if (id) {
      makePutRequest(setLoading, `api/banners/${id}`, data, "Banner", redirect);
    } else {
      makePostRequest(
        setLoading,
        "api/banners",
        data,
        "Banner",
        reset,
        redirect
      );
    }
    setImageUrl("");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Banner Title"
          name="title"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Banner Link"
          name="link"
          register={register}
          errors={errors}
          type="url"
          className="w-full"
        />
        <ImageInput
          label="Banner Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="bannerImageUploader"
        />
        <ToggleInput
          label="Publish your Banner"
          name={"isActive"}
          isActive={isActive}
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Banner" : "Create Banner"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Banner please wait...`}
      />
    </form>
  );
}