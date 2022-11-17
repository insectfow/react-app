import React, { useEffect, useRef } from 'react';
import './App.css';


const useHover = onHover => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (typeof onHover !== "function") {
      return;
    }
    if (element) {
      element.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element) {
        element.removeEventListener("mouseenter", onHover);
      }
    };
  }, [onHover])
  return ref
}



const App = () => {
  const sayHello = () => console.log('say hello');
  const title = useHover(sayHello);
  return (
    <div className="App">
      <div ref={title}>hello</div>
    </div>
  );
}

export default App;
