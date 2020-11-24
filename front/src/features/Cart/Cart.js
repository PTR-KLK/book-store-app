import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "./Cart.slice";
import CartItem from "./components/CartItem";

const Cart = () => {
  const cart = useSelector(selectCart);

  return (
    <section className="cartSection">
      <ul className="cartSection__bookList">
        {cart.length > 0 &&
          cart.map((el, idx) => {
            return (
              <li key={el.id}>
                <CartItem data={el} idx={idx + 1} />
              </li>
            );
          })}
      </ul>
      <div className="cartSection__navigation">
        {cart.length > 0 ? (
          <Link className="cartSection__orderButton" to="/order">
            Order
          </Link>
        ) : (
          <>
            <p className="cartSection__orderInfo">
              There is nothing to order, yet.
            </p>
            <p className="cartSection__orderButton cartSection__orderButton--inactive">
              Order
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
