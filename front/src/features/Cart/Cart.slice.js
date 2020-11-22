import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      state.list = [...state.list, { ...action.payload, quantity: 1 }];
    },
    removeBookFromCart: (state, action) => {
      state.list = state.list.filter((el) => el.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const {
  addBookToCart,
  removeBookFromCart,
  clearCart,
} = cartSlice.actions;

export const selectCart = (state) => state.cart.list;

export default cartSlice.reducer;
