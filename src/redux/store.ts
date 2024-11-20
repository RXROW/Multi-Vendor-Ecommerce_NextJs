



// Create Store 

import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import checkoutSlice from "./slices/checkoutSlice";

export const store=configureStore({
  reducer:{
    // Slices Here
    cart: CartSlice,
    checkout:checkoutSlice


  }
})