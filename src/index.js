import React from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import store from "./app/store";
import { Provider } from "react-redux";
import "./i18next";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
