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
        <button onClick={increment} href='#'>+</button>
        <button onClick={decrement} href='#'>-</button>
      </div>

    </div>
  );
}

export default App;