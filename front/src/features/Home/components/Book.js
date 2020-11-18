import React from "react";
import CartButton from "../../Cart/components/CartButton";
const Book = ({ data }) => {
  return (
    <figure>
      <img src={data.cover_url} alt={`${data.title} cover`} />
      <figcaption>
        <p>{data.title}</p>
        <p>Author(s): {data.author}</p>
        <p>Pages: {data.pages}</p>
        <p>Price: {`${data.price / 100} ${data.currency}`}</p>
      </figcaption>
      <CartButton item={data} />
    </figure>
  );
};

export default Book;
