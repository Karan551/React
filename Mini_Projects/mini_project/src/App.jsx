import { useEffect, useState } from "react";
import { ModalParent, Navbar, Search } from "./Components";
import { ThemeContextProvider } from "./Context/ThemeContext";

// import "./index.css";


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {

    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);

  }, [theme]);



  return (
    <>

      <ThemeContextProvider value={{ theme, setTheme }}>
        <main className="bg-white text-black dark:bg-black dark:text-white">
          <Navbar />
          <div className="min-h-screen flex items-center justify-center flex-col">
            {/* <h1>Hello Mini Project</h1> */}
            {/* <ModalParent /> */}

            {/* <Search /> */}

            <h1 className="text-5xl font-semibold bg-gray-300 text-orange-500 px-4 py-3 rounded-lg dark:text-black dark:bg-gray-200">{theme[0].toUpperCase()+theme.slice(1,)} Theme is activated.</h1>


            <h3 className="bg-gray-300 text-emerald-500 rounded-lg font-semibold my-2 text-4xl px-4 py-3 dark:text-[#000]">Hello How are you I am fine and you.</h3>
          </div>
        </main>
      </ThemeContextProvider>
    </>
  );
}

export default App;
