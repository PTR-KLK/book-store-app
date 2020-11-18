import React from "react";
import CartButton from "./CartButton";

const Cart = ({ data }) => {
  return (
    <>
      <img src={data.cover_url} alt={`${data.title} cover`} />
      <p>{data.title}</p>
      <p>Price: {`${data.price / 100} ${data.currency}`}</p>
      <CartButton item={data} />
    </>
  );
};

export default Cart;
