"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
 
import { useForm } from "react-hook-form";
 
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";

// Define available roles
type UserRole = "USER" | "SUPPLIER";

 

 
interface RegisterFormProps {
  role?: UserRole;
}

export default function RegisterForm({ role = "USER" }: RegisterFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
 
    defaultValues: {
      role
    }
  });

  async function onSubmit(data: any) {
    setLoading(true);
    setEmailError("");

    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (!response.ok) {
        if (response.status === 400) {
          setEmailError("User with this email already exists");
          toast.error("User with this email already exists");
          reset();
          return;
        }
        throw new Error(responseData.message || "Registration failed");
      }

      // Save the JWT token to localStorage
      if (responseData.token) {
        localStorage.setItem("token", responseData.token);
      }

      toast.success("User created successfully");
      reset();

      // Redirect based on role
      router.push(role === "USER" ? "/" : `/onboarding/${responseData.user.id}`);
    } catch (error) {
      console.error("Registration error:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to register user"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="hidden" {...register("role")} />
      
      <TextInput
        label="Full Name"
        name="name"
        type="text"
        register={register}
        errors={errors}
 
        className="w-full"
      />

      <TextInput
        label="Email Address"
        name="email"
        type="email"
        register={register}
        errors={errors}
 
        className="w-full"
      />
      {emailError && (
        <p className="text-sm text-red-600 mt-1">{emailError}</p>
      )}

      <TextInput
        label="Password"
        name="password"
        type="password"
        register={register}
        errors={errors}
   
        className="w-full"
      />

      <SubmitButton
        isLoading={loading}
        buttonTitle="Register"
        loadingButtonTitle="Creating account..."
      />

      <div className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
        <p>
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-green-400 hover:underline dark:text-green-500"
          >
            Login
          </Link>
        </p>

        <p>
          {role === "USER" ? (
            <>
              Are you a supplier?{" "}
              <Link
                href="/register-supplier"
                className="font-medium text-green-400 hover:underline dark:text-green-500"
              >
                Register as Supplier
              </Link>
            </>
          ) : (
            <>
              Are you a normal user?{" "}
              <Link
                href="/register"
                className="font-medium text-green-400 hover:underline dark:text-green-500"
              >
                Register as User
              </Link>
            </>
          )}
        </p>
      </div>
    </form>
  );
}