import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  currentStep: number;
  personalInfo: Record<string, any>; // Replace `any` with specific types if possible
  shippingInfo: Record<string, any>; // Replace `any` with specific types if possible
  combinedData: Record<string, any>;  // Replace `any` with specific types if possible
}

const initialState: CheckoutState = {
  currentStep: 1,
  personalInfo: {},
  shippingInfo: {},
  combinedData: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    updatePersonalInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.personalInfo = { ...state.personalInfo, ...action.payload };
      state.combinedData = {
        ...state.combinedData,
        ...action.payload,
      };
    },
    updateShippingInfo: (state, action: PayloadAction<Record<string, any>>) => {
      state.shippingInfo = { ...state.shippingInfo, ...action.payload };
      state.combinedData = {
        ...state.combinedData,
        ...action.payload,
      };
    },
    updateCombinedData: (state, action: PayloadAction<Record<string, any>>) => {
      state.combinedData = {
        ...state.personalInfo,
        ...state.shippingInfo,
        ...action.payload,
      };
    },
  },
});

export const {
  setCurrentStep,
  updatePersonalInfo,
  updateShippingInfo,
  updateCombinedData,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
