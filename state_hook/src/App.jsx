import React from 'react';
import First from './First';
import './App.css';
function App() {
  return (
    <div>
    <First />
     <h1>First Heading ...</h1>
     <a href='#'>link</a>
     <ul>
      <li>first</li>
      <li>second</li>
      <li>third</li>
      <li><First/></li>
     </ul>
    </div>

  )
}
export default App;
