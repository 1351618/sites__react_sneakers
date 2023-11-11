import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.min.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { MainProvider } from "./context/MainContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainProvider>
      <App />
    </MainProvider>
  </React.StrictMode>
);

reportWebVitals();
