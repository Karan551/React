import React from "react";
import { useContext } from "react";
import ThemeContext from "../Context/Context";
const Button = ({ value = "Google" }) => {
  //
  const [theme, setTheme] = useContext(ThemeContext);
  console.log("Now theme is:", theme);
  return (
    <>
      <button
        className="btn"
        onClick={() => {
          setTheme(theme == "light" ? "dark" : "light");
        }}
      >
        {theme == "light" ? "Light" : "Dark"} Theme is activated.
      </button>
    </>
  );
};

export default Button;
