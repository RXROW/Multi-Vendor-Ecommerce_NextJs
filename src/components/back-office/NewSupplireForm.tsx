"use client"
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ArrayTagsItemsInput from "../FormInputs/ArrayTagsItemsInput";
import { generateUserCode } from "@/lib/generateUserCode";
import TextareaInput from "../FormInputs/TextareaInput";

type SupplierFormData = {
  userId: any;
  code: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  mainProduct: string;
  profileImageUrl?: string;
  terms?: string;
  notes?: string;
  isActive: boolean;
  products?: string[];
};

type NewSupplierFormProps = {
  user?: any;  // Assuming user could be any type
  updateSupplier?: any; // This should match your actual updateSupplier type if you have one
};

const NewSupplierForm: React.FC<NewSupplierFormProps> = ({ user, updateSupplier }) => {
  const id = updateSupplier?.id ?? "";
  const [loading, setLoading] = useState(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(user?.profileImageUrl || "");
  const [products, setProducts] = useState<string[]>(user?.products || []);

  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<SupplierFormData>({
    defaultValues: {
      isActive: user?.isActive || true,
      ...user,
    },
  });

  const router = useRouter();

  function redirect() {
    router.push("/dashboard/suppliers");
  }

  const isActive = watch("isActive");

  async function onSubmit(data: SupplierFormData) {
    const code = generateUserCode("SEF", data.name);
    data.code = code;
    data.products = products;
    data.userId = user?.id || null;
    data.profileImageUrl = profileImageUrl;

    if (id) {
      await makePutRequest(
        setLoading,
        `/api/suppliers/${id}`,
        data,
        "Supplier Profile",
        redirect
      );
    } else {
      await makePostRequest(
        setLoading,
        "api/suppliers",
        data,
        "Supplier Profile",
        reset,
        redirect
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {/* Full Name */}
        <TextInput
          label="Supplier's Full Name"
          name="name"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={true}
        />

        {/* Email */}
        <TextInput
          label="Supplier's Email"
          name="email"
          register={register}
          errors={errors}
          className="w-full"
          type="email"
          isRequired={true}
        />

        {/* Phone */}
        <TextInput
          label="Supplier's Phone"
          name="phone"
          type="tel"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={true}
        />

        {/* Address */}
        <TextInput
          label="Supplier's Address"
          name="address"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={true}
        />

        {/* Main Product */}
        <TextInput
          label="Main Product"
          name="mainProduct"
          type="text"
          register={register}
          errors={errors}
          className="w-full"
          isRequired={true}
        />

        {/* Products */}
        <ArrayTagsItemsInput
          items={products}
          setItems={setProducts}
          itemTitle="Products"
        />

        {/* Profile Image */}
        <ImageInput
          imageUrl={profileImageUrl}
          setImageUrl={setProfileImageUrl}
          endpoint="supplierProfileUploader"
          label="Supplier Profile Image"
        />

        {/* Payment Terms */}
        <TextareaInput
          label="Supplier's Payment Terms (optional)"
          name="terms"
          register={register}
          errors={errors}
          isRequired={false}
        />

        {/* Notes */}
        <TextareaInput
          label="Supplier's Notes (optional)"
          name="notes"
          register={register}
          errors={errors}
          isRequired={false}
        />

        {/* Supplier Status */}
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
        buttonTitle={user ? "Update Supplier" : "Create Supplier"}
        loadingButtonTitle={user ? "Updating supplier, please wait..." : "Creating supplier, please wait..."}
      />
    </form>
  );
};

export default NewSupplierForm;
