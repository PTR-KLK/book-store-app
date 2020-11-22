import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./store";
import "./stylesheets/index.scss";
import App from "./App";

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
