import React from 'react'
import Child1 from './Child1'

function Compnent1({val1}) {
  return (
    <div style={{display:'flex'}}>
        <h1>Component1 : value-{val1}</h1>
        <Child1/>
    </div>
  )
}

export default Compnent1