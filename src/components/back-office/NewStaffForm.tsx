"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import FormHeader from "@/components/back-office/FormHeader";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextInput from "@/components/FormInputs/TextInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import TextareaInput from "@/components/FormInputs/TextareaInput";

import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";

export default function NewStaffForm({ staff = {} }: any) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const defaultValues = useMemo(() => ({
    ...staff,
    isActive: staff?.isActive ?? true,
  }), [staff]);

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
    defaultValues,
  });

  const isActive = watch("isActive");

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      data.code = generateUserCode("EMSF", data.name);
      if (staff?.id) {
        await makePutRequest(setLoading, `/api/staffs/${staff.id}`, data, "Staff", redirect);
      } else {
        await makePostRequest(setLoading, "/api/staffs", data, "Staff", reset, redirect);
      }
    } catch (error) {
      console.error("Error creating/updating staff:", error);
    }
    setLoading(false);
  }

  function redirect() {
    router.push("/dashboard/staffs");
  }

  return (
    <div className="container mx-auto">
      <FormHeader title={staff?.id ? "Update Staff" : "New Staff"} />

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
              {!staff?.id && (
          <TextInput
            label="Date of Birth"
            name="dob"
            type="date"
            register={register}
            errors={errors}
          />
        )}
          
          {!staff?.id && (
            <TextInput
              label="Password"
              name="password"
              type="password"
              register={register}
              errors={errors}
         
            />
          )}

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
            name="isActive"
            isActive={isActive}
            trueTitle="Active"
            falseTitle="Inactive"
            register={register}
          />
        </div>

        <SubmitButton
          isLoading={loading}
          buttonTitle={staff?.id ? "Update Staff" : "Create Staff"}
          loadingButtonTitle={staff?.id ? "Updating Staff, please wait..." : "Creating Staff, please wait..."}
        />
      </form>
    </div>
  );
}
