import React, { useContext } from 'react';
import { themeContext } from '../../Context/ThemeContext';
import "../../App.css";
function Button() {

  const { theme, setTheme } = useContext(themeContext);


  const handleClick = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };


  return (
    <div className='mx-2 '>
      <button className='font-semibold text-xl px-2 py-3 bg-black text-white rounded-lg btn dark:text-white dark:bg-[#212121]'

        onClick={handleClick}
      >{theme[0].toUpperCase()+theme.slice(1,)} Mode is activated. </button>
    </div>
  );
}

export default Button;
