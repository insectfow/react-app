import React, { useEffect, useRef, useState, } from 'react';
import './App.css';
import useAxios from './useAxios'



const App = () => {
  const { loading, data, error, refetch } = useAxios({ url: 'https://yts.mx/api/v2/list_movies.json' });
  console.log(loading, data, error, refetch);
  return (
    <div className="App" >
      <h1>{ data && data.status }</h1>
      <h1>{ loading && "loading"}</h1>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
