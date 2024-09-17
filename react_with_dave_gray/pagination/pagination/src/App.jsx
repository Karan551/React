import { useState,useEffect } from 'react';
import Example1 from './Components/Example1';
import "./styles.css"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Example1/>
    </>
  );
}

export default App;