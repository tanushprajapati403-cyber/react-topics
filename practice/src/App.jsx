import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Count from './Count'
import Button from './Button'

function App() {
let count = 0; 
let clickincrement = () => {
count++;
console.log(count);
};
  return (
    <>
    <h1>click counter</h1>
    <Count value={count}/>
    <br />
    <br />
    <Button btn={clickincrement}/>
    </>
  )
}

export default App
