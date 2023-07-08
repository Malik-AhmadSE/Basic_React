import React from 'react';

function App() {
  let name='Ahmad';
  return (
    <div>
    {name.length<=4?<h1>{name}</h1>:<h1>Not a Valid Name </h1>}
    </div>
  )
}

export default App;

