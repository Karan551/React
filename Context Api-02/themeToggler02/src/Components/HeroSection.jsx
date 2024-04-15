import React from "react";
import ThemeToggler from "./ThemeToggler";
import { useContext } from "react";
import AppTheme from "../Color";
import ThemeContext from "../Context/Context";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  return (
    <>
      <div
        className="container"
        style={{
          color: currentTheme.color,
          backgroundColor: currentTheme.backgroundColor,
          border: currentTheme.border,
        }}
      >
        <h3>Context API</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          delectus illo! Soluta numquam eius hic.
        </p>
        <ThemeToggler />
      </div>
    </>
  );
};

export default HeroSection;
