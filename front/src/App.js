import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks, selectBooks } from "./features/Home/Home.slice";
import Home from "./features/Home/Home";
import Cart from "./features/Cart/Cart";
import Navbar from "./components/Navbar";
import Order from "./features/Order/Order";

const App = () => {
  const dispatch = useDispatch();
  const { page } = useSelector(selectBooks);

  const url = `http://localhost:3001/api/book?page=${page}`;

  useEffect(() => {
    dispatch(fetchBooks(url));
  }, [dispatch, url]);

  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/order" component={Order} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
