import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToCart, removeBookFromCart, selectCart } from "../Cart.slice";

const CartButton = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleAddToCart = (item) => {
    dispatch(addBookToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeBookFromCart(item));
  };

  return !!cart.find((el) => el.id === item.id) ? (
    <button onClick={() => handleRemoveFromCart(item)}>Remove from Cart</button>
  ) : (
    <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
  );
};

export default CartButton;
