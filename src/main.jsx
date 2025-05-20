import React, { StrictMode } from "react";
// import { createRoot } from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/main.css";
import "animate.css";
import ScrollToTop from "./components/ScrollToTop.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop/>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
