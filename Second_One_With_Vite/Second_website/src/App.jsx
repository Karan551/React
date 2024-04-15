import React from "react";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSecion";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import "./styles.css"

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <Footer />
    </>
  );
};

export default App;
