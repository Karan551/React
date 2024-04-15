import React, { useState } from 'react';
import HeroSection from './Component/HeroSection';
import ThemeContext from './Context/ThemeContext';
import Header from './Component/Header';

function App() {
  const themeHook = useState("light");
  // console.log("This is themeHook",themeHook)
  return (
    <>
      <ThemeContext.Provider value={themeHook}>
        <Header />
        <HeroSection />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
