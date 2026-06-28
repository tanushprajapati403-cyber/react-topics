import React, { useContext, useState } from 'react'
import Login from './Component/Login'
import Register from './Component/Register'
import { Auth } from './Context/AuthContext'

function App() {
  let {toggle , registeredUsers , setLoggedInUser} = useContext(Auth);
  let lsd = JSON.parse(localStorage.getItem("log user"));
  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-200'>
      {toggle ? <Register/> : <Login/>}
      {
      lsd ?  (<div className='flex flex-col items-center justify-center'>
        <button  className= 'rounded-xl text-black py-4 cursor-pointer bg-red-500 px-4 mt-5'  onClick={()=>{
          localStorage.removeItem("log user");
          setLoggedInUser(null);
        }}>logout</button>
        <div>
         {
          registeredUsers.map((elem)=>{
            return (<div>
              <h1 className='text-2xl text-blue-400'>email : {elem.email}</h1>
              <h1 className='text-2xl text-blue-400'>password : {elem.password}</h1>
            </div>
            )
          })
        }
        </div>
      </div>) : (<div className='text-4xl mt-5'>"please loged it"</div>)

      }
    </div>
  )
}

export default App