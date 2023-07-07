import React from 'react'
import {useState} from 'react';
function App() {
  const [number,setnumber]=useState(0);
  // const handlecount=()=>{
  //   setnumber(number+1);
  // }
  return (
    <div style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
     <div>
     <h1>Counting</h1>
      <h3>{number}</h3>
      <button onClick={()=>{setnumber(number+1)}}>Click</button>
      <h3>{number}</h3>
     </div>
    </div>
  )
}

export default App;

