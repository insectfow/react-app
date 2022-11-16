import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);
  return (
    <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload. { item }
      </p>
      <button onClick={incrementItem}>incrementItem</button>
      <button onClick={decrementItem}>decrementItem</button>
    </div>
  );
}

export default App;
