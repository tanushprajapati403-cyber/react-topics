import React, { useState } from 'react'
import axios from 'axios'
import Home from './Components/Home';
import About from './Components/About';

function App() {

let [toggel , setToggle] =  useState(false);

let [count ,setCount] = useState(0);

// ye axios se axios promis ke jessa kaam he kerta hai.
 let data = axios.get("https://dummyjson.com/products")
 data.then((val)=>{console.dir(val.data.products)})



  return (
    <div>
      <h1>App</h1>
      <h1>count - {count}</h1>
      <button onClick={()=>{setToggle((prev)=>!prev)}}>change state</button>
      <button onClick={()=>{setCount(count + 1)}}>increment</button>
      {
        toggel ?   <Home/> : <About/>
      }
    </div>
  )
}


export default App