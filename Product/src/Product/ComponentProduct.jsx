import React from 'react'
import './Component.css'

function ComponentProduct({data}) {
  return (
    <div className='contanier' style={{height:"45%",width: "20%", gap:"20px"}}>
    <img height={150}  width={150} src={data.img} alt="" />
    <h1>{data.name}</h1>
    <h1>{data.price}</h1>
    <button>Add to cart</button>
    </div>
  )
}

export default ComponentProduct