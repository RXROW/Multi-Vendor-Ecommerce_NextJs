/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
 
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";
import { toast } from "react-toastify";

export default function LoginForm() {
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
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        router.push("/");
        // If role=user => homepage ,
        // If role=supplier => onboarding page ,
        // const userRole=responseData.data.role
        // if (role === "USER") {
        //   router.push("/");
        // } else {
        //   router.push(`/onboarding/${responseData.data.id}`);
        // }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <TextInput
        label="Email"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2 mb-3"
      />

      {emailErr && (
        <small className="text-red-600 -mt-2 mb-2">{emailErr}</small>
      )}

      <TextInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
      />

      <SubmitButton
        isLoading={loading}
        buttonTitle="Login"
        loadingButtonTitle="Singing you in please wait..."
        className="w-full text-center "
      />
      <div className="flex items-center ">
        <div className="w-full bg-slate-500 h-[1px]"></div>
        <span className="mx-2">or</span>
        <div className="w-full bg-slate-500 h-[1px]"></div>
      </div>

      <p className="text-sm py-4 font-light text-gray-500 dark:text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-medium text-blue-500 hover:underline dark:text-blue-500"
        >
          Register
        </Link>
      </p>
    </form>
  );
}