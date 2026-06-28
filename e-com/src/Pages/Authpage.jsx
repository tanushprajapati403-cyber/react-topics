import React, { useState } from 'react'
import Register from '../Components/Register'
import Login from '../Components/Login'

const Authpage = () => {
    let [toggle , setToggle] = useState(false)
  return (
    <div>
        {
            toggle ? <Register setToggle={setToggle}/> : <Login setToggle={setToggle}/>
        }
    </div>
  )
}

export default Authpage;