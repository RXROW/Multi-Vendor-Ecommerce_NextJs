 
import { createSlice } from "@reduxjs/toolkit";

const initialState: any = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {id, title,salePrice,imageUrl} =action.payload;
      const existyingItem=state.find((item:any)=>item.id===id);
      if(existyingItem){
        existyingItem.qty+=1;
      }else{
        state.push({id,title,salePrice,qty:1,imageUrl})
      }
    },
    removeFromCart: (state, action) => {
      const cartId =action.payload;
      return state.filter((item:any)=>item.id!==cartId)
     
    },
    incrementQty: (state, action) => {
      const cartId =action.payload;
      const cartItem=state.find((item:any)=>item.id === cartId)
      if(cartItem){
        cartItem.qty+=1;
      }
    },
    decrementQty: (state, action) => {
      const cartId =action.payload;
      const cartItem=state.find((item:any)=>item.id === cartId)
      if(cartItem && cartItem.qty>1){
        cartItem.qty-=1;
      }
    },
  },
});


export const {addToCart ,removeFromCart ,incrementQty , decrementQty  } = CartSlice.actions;
export default CartSlice.reducer;
