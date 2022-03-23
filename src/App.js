import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  function RandomNumber(){
    console.log("Calculate");
    return Math.trunc(Math.random()*30)
  }
  const [number, setNumber] = useState(()=>{
    return RandomNumber();
  });
  const [state, setState] = useState({
    text: "Number",
    date: Date.now()
  })
  function uploadObject(){
    setState((prev)=>{
      return{
        ...prev,
        text: "new upload"
      }
    })
  }
  function increment (){
    setNumber(prev=>prev+1);
  }
  function decrement(){ 
    setNumber(number-1);
  }
  return (
    <div className="App">
      <div className="Container">
        <div className="btn-group">
          <p>Number: {number}</p>
          <button onClick={increment} className="succes">Add</button>
          <button onClick={decrement} className="danger">Remove</button>
          <button className="secondary" onClick={uploadObject}>Change</button>
        </div>
        <pre>{JSON.stringify(state, null, 1)}</pre>
      </div>
    </div>
  );
}

export default App;
