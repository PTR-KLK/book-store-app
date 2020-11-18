import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <section>
      <p>Order page</p>
      <li>
        <Link to="/">Go Home</Link>
      </li>
      <li>
        <Link to="/cart">Go Back</Link>
      </li>
    </section>
  );
};

export default Order;
