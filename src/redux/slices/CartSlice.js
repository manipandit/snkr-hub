import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((shoe) => action.payload !== shoe.id);
    },
    increaseQty: (state, action) => {
      return state.map((shoe) =>
        shoe.id === action.payload ? { ...shoe, qty: shoe.qty + 1 } : shoe
      );
    },
    decreaseQty: (state, action) => {
      return state.map((shoe) =>
        shoe.id === action.payload ? { ...shoe, qty: shoe.qty - 1 } : shoe
      );
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty } =
  CartSlice.actions;
export default CartSlice.reducer;
