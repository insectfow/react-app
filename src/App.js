import React, { useEffect, useRef, useState, } from 'react';
import './App.css';

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options);
    }
  }
  return fireNotif
}

const App = () => {
  const triggerNotif = useNotification('알람 레쓰고' , {body: '안녕반가워'});
  return (
    <div className="App" >
      <button onClick={triggerNotif}>makeFullscreen</button>
    </div>
  );
}

export default App;
