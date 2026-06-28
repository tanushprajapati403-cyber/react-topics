import React from 'react'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {
    if(false){
          return <Navigate to="/home"/>
    }
  return <Outlet/>
}

export default PublicRoute