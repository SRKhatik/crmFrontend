import React from "react";
import "./Toggle.css";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useContext } from "react";
import { themeContext } from "../../Context";
function Toggle() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <RiMoonFill />
      <RiSunFill />
      <div
        className="t-button"
        style={darkMode ? { right: "2.3rem" } : { left: "2.3rem" }}
      ></div>
    </div>
  );
}
export default Toggle;
