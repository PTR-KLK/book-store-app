import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "./Cart.slice";
import CartItem from "./components/CartItem";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <section>
      <ul>
        {cart.map((el) => {
          return (
            <li key={el.id}>
              <CartItem data={el} />
            </li>
          );
        })}
      </ul>
      <Link to="/order">Order</Link>
    </section>
  );
};

export default Cart;
