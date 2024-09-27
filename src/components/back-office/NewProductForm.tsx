//@ts-nocheck
"use client";
 
import ImageInput from "@/components/FormInputs/ImageInput";
import SelectInput from "@/components/FormInputs/SelectInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayItemsInput from "../FormInputs/ArrayTagsItemsInput";

export default function NewProductForm({
  categories,
  suppliers,
  updateData = {},
}) {
  const initialImageUrl = updateData?.imageUrl ?? "";
  const initialTags = updateData?.tags ?? [];
  const id = updateData?.id ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [tags, setTags] = useState(initialTags);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholesale: false,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");
  const router = useRouter();

  function redirect() {
    router.push("/dashboard/products");
  }

  async function onSubmit(data: any) {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("EMP", data.title);
    data.slug = slug;
    data.tags = tags;
    data.qty = 1;
    data.productCode = productCode;
    data.imageUrl = imageUrl;
    console.log(data);

    if (id) {
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        "Product",
        redirect
      );
    } else {
      makePostRequest(
        setLoading,
        "api/products",
        data,
        "Product",
        reset,
        redirect
      );
    }

    setImageUrl("");
    setTags([]);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="Product Title"
          name="title"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Product SKU"
          name="sku"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          label="Product Barcode"
          name="barcode"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Price (Before Discount)"
          name="productPrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Sale Price (Discounted)"
          name="salePrice"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Product Stock"
          name="productStock"
          type="number"
          register={register}
          errors={errors}
          className="w-full"
        />

        <TextInput
          label="Unit Of Measurement(eg: Kilogram)"
          name="unit"
          register={register}
          errors={errors}
          className="w-full"
        />
        <SelectInput
          label="Select Category"
          name="categoryId"
          register={register}
          options={categories}
          className="w-full"
        />
        <SelectInput
          label="Select Supplier"
          name="userId"
          register={register}
          options={suppliers}
          className="w-full"
        />

        <ToggleInput
          label="Supports Wholesale Selling"
          name="isWholesale"
          trueTitle="Supported"
          falseTitle="Not Supported"
          register={register}
        />

        {isWholesale && (
          <>
            <TextInput
              label="Wholesale Price"
              name="wholesalePrice"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />
            <TextInput
              label="Minimum Wholesale Qty"
              name="wholesaleQty"
              type="number"
              register={register}
              errors={errors}
              className="w-full"
            />
          </>
        )}

        <ImageInput
          label="Product Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="productImageUploader"
        />
          <ArrayItemsInput items={tags} setItems={setTags} itemTitle="Tag" /> 
     

        <TextareaInput
          label="Product Description"
          name="description"
          register={register}
          errors={errors}
        />
        <ToggleInput
          label="Publish your Product"
          name={"isActive"}
          trueTitle="Active"
          falseTitle="Draft"
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle={id ? "Update Product" : "Create Product"}
        loadingButtonTitle={`${
          id ? "Updating" : "Creating"
        } Product please wait...`}
      />
    </form>
  );
}