"use client";

import React from "react";
import PersonalDetailsForm from "./stepForms/PersonalDetailsForm";
import ShoppingDetails from "./stepForms/ShoppingDetails";
import PaymentMethodsForm from "./stepForms/PaymentMethodsForm";
import OrderSummary from "./stepForms/OrderSummary";
import { useSelector } from "react-redux";

const StepForm = () => {
  const currentStep = useSelector((store:any) => store.checkout.currentStep);

  function renderStepForm(step: number) {
    if (step === 1) {
      return <PersonalDetailsForm/>;
    } else if (step === 2) {
      return <ShoppingDetails/>;
    }else if (step === 3) {
      return <PaymentMethodsForm/>;
    }else if (step === 4) {
      return <OrderSummary/>;
    }
  }
  return <div>{renderStepForm(currentStep)}</div>;
};

export default StepForm;
