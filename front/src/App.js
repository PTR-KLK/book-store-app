import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./features/Home/Home";

const App = () => {
  return (
    <Router>
      <main>
        <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
