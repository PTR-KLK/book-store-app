import React from "react";
import CartButton from "../../Cart/components/CartButton";
const Book = ({ data }) => {
  return (
    <figure>
      <h4 className="bookTitle">{data.title}</h4>
      <img src={data.cover_url} alt={`${data.title} cover`} />
      <figcaption>
        <h4>Author(s):</h4>
        <p>{data.author}</p>
        <p>{data.pages} pages</p>
      </figcaption>
      <div>
        <p>{`${(data.price / 100).toFixed(2)} ${data.currency}`}</p>
        <CartButton item={data} />
      </div>
    </figure>
  );
};

export default Book;
