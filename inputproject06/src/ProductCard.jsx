import React from 'react'

function ProductCard({user,handleUpdate}) {
  return (
    <div>
         <img  width={100}
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="" 
        />
        <h1>Name:{user.name}</h1>
        <h2>Email:{user.mobile}</h2>
        <h3>Mob:{user.mobile}</h3>
        <button onClick={()=>{handleUpdate(user)}}>Update</button>
    </div>
  )
}

export default ProductCard