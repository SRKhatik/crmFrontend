import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Customer from "./pages/Customer";
import Admin from "./pages/Admin";
import Engineer from "./pages/Engineer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Auth from "../src/hoc/Auth";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const defaultMaterialTheme = createTheme();
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{
      background : darkMode? 'black':'',
      color:darkMode? "white":"",
    }}>
      <ThemeProvider theme={defaultMaterialTheme}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/customer"element={<Auth> <Customer /></Auth> }/>
            <Route path="/customer/createTicket" element={ <Auth> <Customer/> </Auth> } />
            <Route path="/engineer" element={<Auth> <Engineer /></Auth>}/>
            <Route path="/admin"element={<Auth> <Admin /></Auth>}/>
            <Route path="/admin/:userId"element={<Auth> <Admin /></Auth>}/>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
