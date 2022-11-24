import React, { useEffect, useRef, useState, } from 'react';
import './App.css';

const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
      if (callback && typeof callback === 'function') {
        callback(isFull);
      }
  }
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullscreen) {
        element.current.mozRequestFullscreen();
      } else if (element.current.webkitRequestFullscreen) {
        element.current.webkitRequestFullscreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true);
    }
  }

  const exitFull = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozExitFullscreen) {
      document.mozExitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    runCb(false);
  }
  return {element, triggerFull, exitFull}
}


const App = () => {
  const onFullS = (isFull) => {
    console.log(isFull ? 'full' : 'short');
  }
  const { element, triggerFull, exitFull } = useFullscreen(onFullS);
  return (
    <div className="App" >
      <div ref={element}>
        <img  src="https://images.unsplash.com/photo-1669147528483-5b5b4493cbe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"></img>
        <button onClick={exitFull}>exitFull</button>

      </div>
      <button onClick={triggerFull}>makeFullscreen</button>
    </div>
  );
}

export default App;
