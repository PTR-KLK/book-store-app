import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { orderBooks, selectOrder } from "./Order.slice";
import { selectCart } from "../Cart/Cart.slice";
import FormInputs from "./components/FormInputs";
const Order = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const { list: orders } = useSelector(selectOrder);

  const url = "http://localhost:3001/api/order";

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(orderBooks(url));
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        {cart.length > 0 ? (
          <FormInputs />
        ) : orders.length > 0 ? (
          <p>Thank you for ordering in our shop.</p>
        ) : (
          <p>There is nothing to order, yet.</p>
        )}
      </section>
      <span>
        <Link to="/">Go back to Shop</Link>
        <input type="submit" value="Order" disabled={cart.length === 0} />
      </span>
    </form>
  );
};

export default Order;
