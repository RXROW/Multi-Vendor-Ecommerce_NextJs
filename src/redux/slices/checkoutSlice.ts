import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CheckoutState {
  currentStep: number;
  personalInfo: Record<string, any>; 
  shippingInfo: Record<string, any>; 
  paymentMethod:Record<string, any>; 
  combinedData: Record<string, any>;  
}

const initialState: CheckoutState = {
  currentStep: 1,
  personalInfo: {},
  shippingInfo: {},
  paymentMethod:{},
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
    updatePaymentMethod: (state, action: PayloadAction<Record<string, any>>) => {
      state.paymentMethod = { ...state.paymentMethod, ...action.payload };
      state.combinedData = {
        ...state.combinedData,
        ...action.payload,
      };
    },
    updateCombinedData: (state, action: PayloadAction<Record<string, any>>) => {
      state.combinedData = {
        ...state.personalInfo,
        ...state.shippingInfo,
        ...state.paymentMethod,
        ...action.payload,
      };
    },
  },
});

export const {
  setCurrentStep,
  updatePersonalInfo,
  updateShippingInfo,
  updatePaymentMethod,
  updateCombinedData,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
