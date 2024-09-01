import { useState } from 'react';
import Input from './Components/Input';
import Square from './Components/Square';


function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexColorName, setHexColorName] = useState("");
  const [isDarkText, setIsDarkText] = useState(false);

  return (
    <>
      <Square
        colorName={colorValue}
        hexColorName={hexColorName}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}

        setHexColorName={setHexColorName}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />

    </>
  );
}

export default App;
