import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <h1 className="heading">Counter App Using State/Hooks</h1>
        <div className="App">
          <h2 className="heading">Counter Value is : {count}</h2>
          <button className="btn" onClick={() => setCount(0)}>
            Reset Counter Value
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            Increase Counter Value
          </button>
          <button
            className="btn"
            onClick={() => (count > 0 ? setCount(count - 1) : 0)}
          >
            Decrease Counter Value
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
