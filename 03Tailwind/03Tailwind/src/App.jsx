
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Slides from './Components/Slides';
import { SLIDES_DATA } from "./constants";
import {Main} from "./Components/index"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
     <Main />
        {/* <Slides slides={SLIDES_DATA} /> */}
      </div>
    </>
  );
}

export default App;
