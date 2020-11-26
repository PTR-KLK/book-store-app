import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "./Cart.slice";
import CartItem from "./components/CartItem";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <section className="cartSection">
      <ul>
        {cart.length > 0 &&
          cart.map((el, idx) => {
            return (
              <li key={el.id}>
                <CartItem data={el} idx={idx + 1} />
              </li>
            );
          })}
        {cart.length === 0 ? <p>There is nothing to order, yet.</p> : null}
      </ul>
      <span>
        <Link to="/">Go Back</Link>
        {cart.length > 0 ? (
          <Link to="/order">Order</Link>
        ) : (
          <p className="inactive">Order</p>
        )}
      </span>
    </section>
  );
};

export default Cart;
