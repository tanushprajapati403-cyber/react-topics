import React, { useState } from 'react'

function App() {
let [count , setCount]=useState(0);

  return (
    <div>
      <h1>Count is = {count}</h1>

      <button onClick={()=>{
      setCount(count+1);
      }}>increment</button>

      <button onClick={()=>{
      setCount(count-1);
      }}>decrement</button>
    </div>
  )
}

export default App
