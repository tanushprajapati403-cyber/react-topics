import React, { useContext } from 'react'
import { Mystore } from '../Context/MyContext'

function Wrapper() {

 let data =    useContext(Mystore);
 console.log(data)
  return (
    <div>Wrapper</div>
  )
}

export default Wrapper