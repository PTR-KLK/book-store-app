import React from "react";

const Book = ({ data }) => {
  const handleAddToCart = () => {};

  return (
    <figure>
      <img src={data.cover_url} alt={`${data.title} cover`} />
      <figcaption>
        <p>{data.title}</p>
        <p>Author(s): {data.author}</p>
        <p>Pages: {data.pages}</p>
        <p>Price: {`${data.price / 100} ${data.currency}`}</p>
      </figcaption>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </figure>
  );
};

export default Book;
