import React from 'react'
import { useState } from 'react';

function App() {
let[list,setList]=useState({
  naam:"",
  email:"",
  password:"",
});
// console.log(list);
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault();
      console.log(list);
      }} action="">

        <input onChange={(e)=>{setList({...list,naam : e.target.value})}} type="name" placeholder='name' />

        <input onChange={(e)=>{setList({...list,email : e.target.value})}} type="email" placeholder='email'/>

        <input onChange={(e)=>{setList({...list,password : e.target.value})}} type="password" placeholder='password'/>

        <button>Submit</button>

      </form>
    </div>
  )
}

export default App