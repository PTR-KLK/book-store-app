import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks } from "./Home.slice";
import Book from "./Components/Book";
import Pager from "./Components/Pager";
import Loader from "./Components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error, page } = useSelector(selectBooks);

  const url = `http://localhost:3001/api/book?page=${page}`;

  useEffect(() => {
    dispatch(fetchBooks(url));
  }, [dispatch, url]);

  if (loading || !data.data) {
    return <Loader msg="Loading..." />;
  }

  if (error) {
    return <Loader msg="Error" />;
  }

  return (
    <section>
      <ul>
        {data.data.map((el) => (
          <li key={el.id}>
            <Book data={el} />
          </li>
        ))}
      </ul>
      <Pager />
    </section>
  );
};

export default Home;
