import { useEffect, useState } from "react";

import Card from "./Components/Card";

import Button from "./Components/Button";
import { ThemeContextProvider } from "./Context/ThemeContext";



function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");

    document.querySelector("html").classList.add(themeMode);

  }, [themeMode]);

  return (
    <>

      <ThemeContextProvider value={{ themeMode, darkMode, lightMode }}>

        <h1 className='text-3xl bg-zinc-300 text-black px-4 py-3 text-center  dark:text-white dark:bg-zinc-700'>Context API VERSION 2 Project.</h1>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">

            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Button Component */}
              <Button />
            </div>

            <div className="w-full max-w-sm mx-auto">
              {/* Card Component */}
              <Card />


            </div>
          </div>
        </div>


      </ThemeContextProvider>
    </>
  );
}

export default App;
