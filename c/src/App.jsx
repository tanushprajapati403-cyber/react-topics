import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Compnent1 from './component/Compnent1'
import Compnent2 from './component/Compnent2'
import Compnent3 from './component/Compnent3'

function App() {
let val1 = 10;
let val2 = 20;
let val3 = 30;
  return (
    <>
    <h1>hello</h1>
    <Compnent1 val1={val1}/>
    <Compnent2  val2={val2}/>
    <Compnent3  val3={val3}/>
    </>
  )
}

export default App
