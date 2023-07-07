import React from 'react'
import First from './components/First';
import Ap from './Ap';

function App() {
  return (
    <div id='main'>
       <h1>Hello world ...</h1>
       <First />
       <Second />
       <Ap/>
    </div>
   
  )
}

function Second() {
  return (
    <div>
       <h1>Component</h1>
    </div>  
  )
}

export default App;
