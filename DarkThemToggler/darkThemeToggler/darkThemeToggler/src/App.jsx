import { useState } from 'react';
import useToogleTheme from './CustomHooks/ToogleTheme';

// import './App.css';

function App() {
  // const [count, setCount] = useState(0);
  const [bgColor, setBGColor] = useToogleTheme("theme", "dark");

  const handleTheme = () => {
    setBGColor(bgColor === "dark" ? "light" : "dark");
    // setTheme(theme === "light" ? "dark" : "light");
  };


  console.log("this is after change theme---", bgColor);
console.log("Local Storage value is:",localStorage.getItem('theme'))
  return (
    <>
      <div className='light-dark-mode container' data-theme={bgColor}>


        <h1>Dark Or Light Theme Toggler</h1>
        <button className='btn' onClick={handleTheme} >Dark Theme</button>
      </div>
    </>
  );
}

export default App;
