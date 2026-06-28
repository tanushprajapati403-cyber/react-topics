import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="h-[10%] mb-8 shadow-md flex justify-between px-10 items-center bg-black text-2xl text-white py-5">
        <h1>All</h1>
        <div className="flex items-center gap-10 font-semibold">
        <NavLink className={({isActive})=> isActive ? "text-[#C8F400]" : ""} to="/home">home</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-[#C8F400]" : ""} to="/shop">shop</NavLink>
        <NavLink className={({isActive})=> isActive ? "text-[#C8F400]"  : ""} to="/about">about</NavLink>
        </div>
        <div>
          <h1>Log Out</h1>
        </div>
        
    </div>
  )
}

export default Navbar