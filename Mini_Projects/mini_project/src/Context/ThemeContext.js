import { createContext } from "react";

/* 
export const themeContext = createContext({
    themeMode: "light",
    darkMode: () => { },
    lightMode: () => { },
}); */

export const themeContext = createContext();

export const ThemeContextProvider = themeContext.Provider;