import React, { useEffect, useState } from 'react'
import About from './Components/About';
import Home from './Components/Home';

function App() {

let [toggel , setToggle] =  useState(false);

let [count ,setCount] = useState(0);

console.log("app render...");

// use effect hamesha = mouting->(create) , update->([dependency]) , unmounting->(delete ker ta hai or return ka use, return ()=>{} ) kerta  hai.
// ager [] array kahli hai too bo ek bar rerender hoga bass ager es me toogel ya count ka use ker diyea to ye uske anane pe chalega jitna baar aye ya .
// component ko control kerta hai.

// useEffect(()=>{
//   console.log("app render...useeffect")
// },[])




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