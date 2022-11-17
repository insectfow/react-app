import React, { useEffect, useRef } from 'react';
import './App.css';


const useClick = onClick => {
  const ref = useRef();
  
  useEffect(() => {
    if (typeof onClick !== 'function') {
      return;
    }
    const element = ref.current;
    if (element) {
      element.addEventListener('click', onClick);
    }
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    }
  }, [onClick])
  return ref.current;
}

const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <div ref={title}>hello</div>
    </div>
  );
}

export default App;
