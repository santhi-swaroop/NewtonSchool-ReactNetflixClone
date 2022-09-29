import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import './App.css';
import StartPic from './startpic'
import HomePage from './HomePage';


function App() {
  
  const [state, setState] = useState(<StartPic />);

  useEffect(() => {
    let timeToShowGif = 3;
    setInterval(() => {
      timeToShowGif -= 1;
      if(timeToShowGif === 0) {
        setState(<HomePage />)
      }
    }, 1000)
  })

  return (
    <>
      {state}
    </>
  );
}

export default App;
