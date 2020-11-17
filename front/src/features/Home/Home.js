import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, setPage, selectBooks } from "./Home.slice";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error, page } = useSelector(selectBooks);

  const url = `http://localhost:3001/api/book?page=${page}`;

  useEffect(() => {
    dispatch(fetchBooks(url));
  }, [dispatch, url]);

  const changePage = (num) => {
    dispatch(setPage(num));
  };

  return (
    <section>
      {loading || !data.data ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          <ul>
            {data.data.map((el) => (
              <li key={el.id}>{el.title}</li>
            ))}
          </ul>
          <ul>
            {Array(Math.ceil(data.metadata.total_records / 10))
              .fill()
              .map((el, idx) => (
                <li key={idx + 1}>
                  <button
                    onClick={() => changePage(idx + 1)}
                    disabled={idx + 1 === page}
                  >
                    {idx + 1}
                  </button>
                </li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default Home;
