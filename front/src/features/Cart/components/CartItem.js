import React from "react";
import CartButton from "./CartButton";

const CartItem = ({ data, idx }) => {
  return (
    <article className="cartItem">
      <h3>{idx}</h3>
      <img src={data.cover_url} alt={`${data.title} cover`} />
      <section>
        <p>{data.title}</p>
        <p>{`${(data.price / 100).toFixed(2)} ${data.currency}`}</p>
        <CartButton item={data} />
      </section>
    </article>
  );
};

export default CartItem;
