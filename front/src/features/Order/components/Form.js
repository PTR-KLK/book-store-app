import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectOrder,
  changeFirstName,
  changeLastName,
  changeCity,
  changeZipCode,
  orderBooks,
} from "../Order.slice";
import TextInput from "./TextInput";

const Order = () => {
  const dispatch = useDispatch();
  const { first_name, last_name, city, zip_code } = useSelector(selectOrder);

  const url = "http://localhost:3001/api/order";

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(orderBooks(url));
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        label="First Name"
        name="fname"
        value={first_name}
        callaback={changeFirstName}
      />
      <TextInput
        label="Last Name"
        name="fname"
        value={last_name}
        callaback={changeLastName}
      />
      <TextInput
        label="City"
        name="fname"
        value={city}
        callaback={changeCity}
      />
      <TextInput
        label="Zip Code"
        name="fname"
        value={zip_code}
        callaback={changeZipCode}
      />
      <input type="submit" value="Order" />
    </form>
  );
};

export default Order;
