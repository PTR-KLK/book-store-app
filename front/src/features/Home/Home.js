import React from "react";
import { useSelector } from "react-redux";
import { selectBooks } from "./Home.slice";
import Book from "./components/Book";
import Pager from "./components/Pager";
import Loader from "./components/Loader";

const Home = () => {
  const { data, loading, error } = useSelector(selectBooks);

  if (loading) {
    return <Loader msg="Loading books..." />;
  }

  if (error) {
    return <Loader msg="Error fetching books from database." />;
  }

  return (
    <section className="homeSection">
      {data.data ? (
        <>
          <ul className="homeSection__bookList">
            {data.data.map((el) => (
              <li key={el.id}>
                <Book data={el} />
              </li>
            ))}
          </ul>
          <Pager />
        </>
      ) : null}
    </section>
  );
};

export default Home;
