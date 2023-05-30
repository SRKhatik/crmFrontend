import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Engineer from "./pages/Engineer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Auth from "../src/hoc/Auth";

function App() {
  const defaultMaterialTheme = createTheme();

  return (
    <div className="App">
      <ThemeProvider theme={defaultMaterialTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/customer"
              element={
                <Auth>
                  {" "}
                  <Customer />{" "}
                </Auth>
              }
            />
            <Route
              path="/engineer"
              element={
                <Auth>
                  {" "}
                  <Engineer />{" "}
                </Auth>
              }
            />
            <Route
              path="/admin"
              element={
                <Auth>
                  {" "}
                  <Admin />{" "}
                </Auth>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
