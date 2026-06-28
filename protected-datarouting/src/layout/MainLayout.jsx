import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <div>
            <NavLink to="/home">home</NavLink>
            <NavLink to="/home/about">About</NavLink>
            <NavLink to="/home/products">Product</NavLink>
        </div>
        <Outlet/>
    </div>
  )
}

export default MainLayout