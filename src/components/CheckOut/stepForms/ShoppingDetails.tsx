"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateShippingInfo,
} from "@/redux/slices/checkoutSlice";
import TextInput from "@/components/FormInputs/TextInput";
import NavButtons from "../NavButtons";
import { Circle, Truck } from "lucide-react";

export default function ShippingInfoForm() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const currentStep = useSelector((store: any) => store.checkout.currentStep);
  const shippingInfo = useSelector((store: any) => store.checkout.shippingInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...shippingInfo,
    },
  });

  async function processData(data: any) {
    console.log("Form Data:", data);
    dispatch(setCurrentStep(currentStep + 1));
    dispatch(updateShippingInfo(data));
  }

  return (
    <form
      className="py-4 bg-gray-800 rounded-lg shadow-md"
      onSubmit={handleSubmit(processData)}
    >
      <div className="mb-6">
        <h5 className="text-xl md:text-3xl font-bold text-lime-400">
          Shipping Details
        </h5>
      </div>
      <div className="mt-12 grid gap-x-4 gap-y-10 grid-cols-2">
        <TextInput
          label="Street Address"
          name="streetAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="City"
          name="city"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Country"
          name="country"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="District"
          name="district"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>

      <div className="my-6">
        <h3 className="mb-5 text-lg font-medium text-gray-900 dark:text-white">
          How much do you expect to use each month?
        </h3>
        <ul className="grid w-full gap-6 md:grid-cols-2">
          <li>
            <input
              type="radio"
              id="hosting-small"
              value="hosting-small"
              {...register("hosting", { required: true })}
              className="hidden peer"
            />
            <label
              htmlFor="hosting-small"
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="flex items-center gap-x-5">
                  <Truck />
                  <div className="text-lg font-semibold">0-50 MB</div>
                </div>
                <div className="w-full">Good for small websites</div>
              </div>
              <Circle />
            </label>
          </li>
          <li>
            <input
              type="radio"
              id="hosting-big"
              value="hosting-big"
              {...register("hosting", { required: true })}
              className="hidden peer"
            />
            <label
              htmlFor="hosting-big"
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-lime-500 peer-checked:border-lime-600 peer-checked:text-lime-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="flex items-center gap-x-5">
                  <Truck />
                  <div className="text-lg font-semibold">50+ MB</div>
                </div>
                <div className="w-full">Great for larger websites</div>
              </div>
              <Circle />
            </label>
          </li>
        </ul>
      </div>

      <NavButtons />
    </form>
  );
}
