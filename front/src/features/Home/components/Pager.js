import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage, selectBooks } from "../Home.slice";

const Home = () => {
  const dispatch = useDispatch();
  const {
    data: {
      metadata: { total_records },
    },
    page,
  } = useSelector(selectBooks);

  const handleChangePage = (num) => {
    dispatch(setPage(num));
  };

  return (
    <ul>
      {Array(Math.ceil(total_records / 10))
        .fill()
        .map((el, idx) => (
          <li key={idx + 1}>
            <button
              onClick={() => handleChangePage(idx + 1)}
              disabled={idx + 1 === page}
            >
              {idx + 1}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Home;
