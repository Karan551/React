import { createContext, useContext } from "react";


// First create context and store variable
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }

});


// second create context.Provider and export
// and where we want we can wrap
export const ThemeContextProvider = ThemeContext.Provider;



export default function useTheme() {
    return useContext(ThemeContext);
}

