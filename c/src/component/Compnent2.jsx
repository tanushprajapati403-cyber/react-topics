import React from 'react'
import Child2 from './Child2'

function Compnent2({val2}) {
  return (
    <div style={{display:'flex'}}>
        <h1>Component2 : value-{val2} </h1>
        <Child2/>
    </div>
  )
}

export default Compnent2