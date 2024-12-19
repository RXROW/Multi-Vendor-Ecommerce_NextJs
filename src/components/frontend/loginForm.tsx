/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react"; 
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
      setLoading(true);
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      setLoading(false);

      if (result?.error) {
     
        setEmailErr(result.error);
        toast.error(result.error);
      } else {
     
        toast.success("Login Successful");
        reset();
        router.push("/");  
      }
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);
      toast.error("Something went wrong, Please try again");
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
        loadingButtonTitle="Signing you in, please wait..."
        className="w-full text-center"
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
