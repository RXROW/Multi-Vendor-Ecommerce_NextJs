"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormHeader from "@/components/back-office/FormHeader";
 
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";

export default function NewStaff() {
   
  const [loading, setLoading] = useState(false);

 
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/staff");
  }


  async function onSubmit(data: any) {
    data.code = generateUserCode("EMSF", data.name);
    await makePostRequest(setLoading, "/api/staffs", data, "Staff", reset, redirect);
  }

  return (
    <div className="container mx-auto">
      {/* Form Header */}
      <FormHeader title="New Staff" />

      {/* Form Section */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
       
          <TextInput
            label="Staff Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="NIN (ID Number)"
            name="nin"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Date of Birth"
            name="dob"
            type="date"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff's Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Staff's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Staff Status"
            name={"isActive"}
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>

 
        <SubmitButton
          isLoading={loading}
          buttonTitle="Create Staff"
          loadingButtonTitle="Creating Staff, please wait..."
        />
      </form>
    </div>
  );
}
