import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  loading: false,
  error: false,
  page: 1,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    fetchBooksData: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchBooksLoading: (state) => {
      state.loading = true;
    },
    fetchBooksError: (state) => {
      state.loading = false;
      state.error = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const {
  fetchBooksData,
  fetchBooksLoading,
  fetchBooksError,
  setPage,
} = booksSlice.actions;

export const fetchBooks = createAsyncThunk(
  "users/fetchBooks",
  async (url, thunkAPI) => {
    thunkAPI.dispatch(fetchBooksLoading());

    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          thunkAPI.dispatch(fetchBooksError());
        } else {
          thunkAPI.dispatch(fetchBooksData(data));
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        thunkAPI.dispatch(fetchBooksError());
      });
  }
);

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
