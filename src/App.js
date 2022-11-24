import React, { useEffect, useRef, } from 'react';
import './App.css';

const useBeforeLeave = (onBefore) => {
  

  const handle = event => {
    const {clientY
  } = event;
    if (clientY >= 0) onBefore();
  }
  useEffect(() => {
    if (typeof onBefore !== 'function') {
      return;
    }

    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, [])
}

const App = () => {
  const begForLife = () => console.log('pls dont leave');
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>ss</h1>
    </div>
  );
}

export default App;
