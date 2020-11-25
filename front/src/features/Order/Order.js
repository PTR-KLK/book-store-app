import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../Cart/Cart.slice";
import Form from "./components/Form";

const Order = () => {
  const cart = useSelector(selectCart);

  return (
    <section className="orderSection">
      {cart.length > 0 ? <Form /> : <p>Nothing to order, yet.</p>}
    </section>
  );
};

export default Order;
