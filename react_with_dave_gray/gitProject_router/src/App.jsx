
import NavBar from "./Components/NavBar";

import { Outlet } from "react-router-dom";
function App() {


  return (
    <main className="main">
      <NavBar />
      <Outlet/>
      {/* <Home /> */}
    </main>
  );
}

export default App;

const About = () => {
  return <>About Us</>;
};

const Contact = () => {
  return <>Contact Us</>;
}


