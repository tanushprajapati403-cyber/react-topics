import React, { useContext } from 'react'
import { Mystore } from './Context/MyContext';

function App() {

  let data =  useContext(Mystore);
   console.log(data)

  return (
    <div>App</div>
  )
}

export default App