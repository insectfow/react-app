import React, { useState, useEffect } from 'react';
import './App.css';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitme = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitme, [title]);
  return setTitle;
}

const App = () => {
  const titleUpdater = useTitle("Loding...");
  setTimeout(() => titleUpdater("home"), 5000)
  return (
    <div className="App">
      <div>hello</div>
    </div>
  );
}

export default App;
