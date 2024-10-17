 
import { createSlice } from "@reduxjs/toolkit";

const saveCartToLocalStorage = (state: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

const initialState: any = typeof window !== "undefined"
  ? JSON.parse(localStorage.getItem("cart") || '[]')
  : [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, salePrice, imageUrl } = action.payload;
      const existingItem = state.find((item: any) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({ id, title, salePrice, qty: 1, imageUrl });
      }
      saveCartToLocalStorage(state);  
    },
    removeFromCart: (state, action) => {
      const cartId = action.payload;
      const updatedState = state.filter((item: any) => item.id !== cartId);
      saveCartToLocalStorage(updatedState); // Save updated cart to localStorage
      return updatedState;
    },
    incrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item: any) => item.id === cartId);
      if (cartItem) {
        cartItem.qty += 1;
      }
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
    decrementQty: (state, action) => {
      const cartId = action.payload;
      const cartItem = state.find((item: any) => item.id === cartId);
      if (cartItem && cartItem.qty > 1) {
        cartItem.qty -= 1;
      }
      saveCartToLocalStorage(state); // Save updated cart to localStorage
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
