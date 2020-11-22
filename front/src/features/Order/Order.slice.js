import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  city: "",
  zip_code: "",
  list: [],
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    changeFirstName: (state, action) => {
      state.first_name = action.payload;
    },
    changeLastName: (state, action) => {
      state.last_name = action.payload;
    },
    changeCity: (state, action) => {
      state.city = action.payload;
    },
    changeZipCode: (state, action) => {
      state.zip_code = action.payload;
    },
    responseOrder: (state, action) => {
      state.list = [...state.list, action.payload];
    },
  },
});

export const {
  changeFirstName,
  changeLastName,
  changeCity,
  changeZipCode,
  responseOrder,
} = orderSlice.actions;

export const orderBooks = createAsyncThunk(
  "order/orderBooks",
  async (url, thunkAPI) => {
    const { first_name, last_name, city, zip_code } = thunkAPI.getState().order;

    const body = {
      order: [
        {
          id: 457,
          quantity: 1,
        },
      ],
      first_name: first_name,
      last_name: last_name,
      city: city,
      zip_code: zip_code,
    };

    return fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((res) => thunkAPI.dispatch(responseOrder(res)));
  }
);

export const selectOrder = (state) => state.order;

export default orderSlice.reducer;
