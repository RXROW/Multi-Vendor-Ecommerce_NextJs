 
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
    removeFromCart: (state, action) => {},
    incrementQty: (state, action) => {},
    decrementQty: (state, action) => {},
  },
});


export const {addToCart ,removeFromCart ,incrementQty , decrementQty  } = CartSlice.actions;
export default CartSlice.reducer;
