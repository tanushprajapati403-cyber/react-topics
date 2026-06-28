import React from 'react'
import Child3 from './Child3'

function Compnent3({val3}) {
  return (
    <div style={{display:'flex'}}>
    <h1>Component3 : value-{val3}</h1>
    <Child3/>
    </div>
  )
}

export default Compnent3