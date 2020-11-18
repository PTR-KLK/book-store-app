import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import Cart from "./features/Cart/Cart";
import Navbar from "./components/Navbar";
import Order from "./features/Order/Order";

const App = () => {
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
