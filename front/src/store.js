import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/Home/Home.slice";
import cartReducer from "./features/Cart/Cart.slice";
import orderReducer from "./features/Order/Order.slice";

export default configureStore({
  reducer: {
    books: booksReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});
