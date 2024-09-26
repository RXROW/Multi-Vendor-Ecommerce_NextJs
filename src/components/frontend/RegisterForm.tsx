"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";
import { toast } from "react-toastify";

export default function RegisterForm({ role = "USER" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");

  async function onSubmit(data: any) {
    setLoading(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, role }),  // Include the role in the request
      });

 
      const responseData = await response.json();
  
      if (response.status == 400) {
        setEmailErr("User With this Email already exists");
        toast.error("User With this Email already exists");
        setLoading(false);
        reset();
      }
      if (response.ok) {
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
     
        if (role === "USER") {
          router.push("/");
        } else{
       
          router.push(`/onboarding/${responseData.id}`);
        }
      } else {
        setLoading(false);
        toast.error("Oops! Something went wrong on Register Form.");
      }
    } catch (error) {
      setLoading(false);
      console.log(error)
   
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <TextInput
        label={`Register as ${role}`}
        name="role"
        type="hidden"
        defaultValue={role}
        register={register}
        errors={errors}
        className="md:col-span-2 mb-3"
      />
      <TextInput
        label="Full Name"
        name="name"
        type="text"
        register={register}
        errors={errors}
        className="md:col-span-2 mb-3"
      />
      <TextInput
        label="Email Address"
        name="email"
        type="email"
        register={register}
        errors={errors}
        className="md:col-span-2 mb-3"
      />
      {emailErr && <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>}

      <TextInput
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Register"
        loadingButtonTitle="Creating account please wait..."
      />

      <p className="mt-2 text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-green-400 hover:underline dark:text-green-500"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
