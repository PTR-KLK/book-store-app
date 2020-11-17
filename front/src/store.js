import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./features/Home/Home.slice";

export default configureStore({
  reducer: {
    books: booksReducer,
  },
});
