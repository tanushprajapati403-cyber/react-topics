import React, { useState } from 'react'

function App() {
  let[naam,setNaam]=useState("");
  let[email,setEmail]=useState("");
  let[password,setPassword]=useState("");

console.log(naam,email,password);

  return (
    <div>

      <form onSubmit={(e)=>{e.preventDefault();
      console.log("name -> " , naam);
      console.log("name -> " , email);
      console.log("name -> " , password);
      }} action="">

        <input onChange={(e)=>{setNaam(e.target.value)}} type="name" placeholder='name' />

        <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='email'/>

        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='password'/>

        <button>Submit</button>

      </form>

    </div>
  )
}

export default App
