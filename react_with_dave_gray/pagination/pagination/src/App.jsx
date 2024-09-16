import { useState,useEffect } from 'react';

import './App.css';
import Example1 from './Components/Example1';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Example1/>
    </>
  );
}

export default App;