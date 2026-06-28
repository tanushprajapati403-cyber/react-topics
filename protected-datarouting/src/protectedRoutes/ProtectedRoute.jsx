import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    if(false){
     return <Navigate to="/"/>
    }

  return <Outlet/>
}

export default ProtectedRoute