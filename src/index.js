import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.scss";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";
//import Scroll  from "./components/smoothScrollbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
