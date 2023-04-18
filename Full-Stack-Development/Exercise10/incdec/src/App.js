import React, { useState } from 'react';
import "./App.css"
function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <div>
        <button onClick={increment} >+</button>
        <button onClick={decrement} >-</button>
      </div>

    </div>
  );
}

export default App;