import "./styles.css";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ThemeContext from "./Context/Context.js";
import { useContext, useState } from "react";

function App() {
  const theme = useContext(ThemeContext);
  const themeHook = useState("light");

  return (
    <>
      <div>
        <ThemeContext.Provider value={themeHook}>
          <Header />
          <HeroSection />
        </ThemeContext.Provider>
      </div>
    </>
  );
}

export default App;
