import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartFromLocalStorage: (state, action) => {
      return [...state, ...action.payload];
    },
    checkoutCart: (state, action) => {
      return [];
    },
    addToCart: (state, action) => {
      return [...state, action.payload];
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

export const {
  setCartFromLocalStorage,
  checkoutCart,
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = CartSlice.actions;
export default CartSlice.reducer;
