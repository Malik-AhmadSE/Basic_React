import React from 'react';
import {useState} from 'react';

function App() {
  const [name,setname]=useState('Ahmad');
  function handlename (){
    setname('Qasim');
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handlename}>Click</button>
    </div>
  )
}

export default App;

