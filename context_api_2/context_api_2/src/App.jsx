import { useEffect, useState } from "react";
import { ThemeContextProvider } from "./Context/Theme";
import ThemeBtn from "./Components/ThemeBtn";
import Card from "./Components/Card";


function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // This is a basic Js to change theme.
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>

      < ThemeContextProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              {/* Theme Button  */}
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">

              {/* Card  */}
              <Card />
            </div>
          </div>
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;
