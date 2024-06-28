import { useEffect, useState } from "react";

function helper(key, defaultTheme) {
    let currentValue;
    try {

        currentValue = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultTheme));
    } catch (error) {
        currentValue = defaultTheme;
        console.log("this is error ", error);
    }
    return currentValue;
}


function useToogleTheme(key, defaultTheme) {
    console.log("result of helper function:", helper(key, defaultTheme));
    const [theme, setTheme] = useState(helper(key, defaultTheme));




    useEffect(() => {

        localStorage.setItem(key, JSON.stringify(theme));

    }, [theme, setTheme]);



    return [theme, setTheme];
    // --------------------------

    /* const [value, setValue] = useState(() => {
        let currentValue;
    
        try {
          currentValue = JSON.parse(
            localStorage.getItem(key) || String(defaultValue)
          );
        } catch (error) {
          console.log(error);
          currentValue = defaultValue;
        }
    
        return currentValue;
      });
    
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [key, value]);
    
      return [value, setValue]; */
}








export default useToogleTheme;