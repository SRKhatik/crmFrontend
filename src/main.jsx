import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-circular-progressbar/dist/styles.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
