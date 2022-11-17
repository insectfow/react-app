import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const sayHello = () => {
    console.log('hello');
  }
  
  const [number, setNumber] = useState(0);
  const [anumber, setAnumber] = useState(0);
  useEffect(sayHello, [number, anumber]);
  return (
    <div className="App">
      <div>hello</div>
      <button onClick={() => setNumber(number + 1)}>{ number }</button>
      <button onClick={() => setAnumber(anumber + 1)}>{ anumber }</button>
    </div>
  );
}

export default App;
