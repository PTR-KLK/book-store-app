import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./features/Home/Home";
import Cart from "./features/Cart/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
