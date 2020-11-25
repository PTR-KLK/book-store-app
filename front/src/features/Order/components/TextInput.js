import React from "react";
import { useDispatch } from "react-redux";

const Order = ({ label, name, value, callaback, pattern, title }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(event) => dispatch(callaback(event.target.value))}
        pattern={pattern}
        title={title}
        required
      />
    </div>
  );
};

export default Order;
