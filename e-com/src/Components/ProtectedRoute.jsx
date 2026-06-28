import React, { useContext } from 'react'
import { Auth } from '../Context/AuthContext';
import { Navigate, Outlet } from 'react-router';

const ProtectedRoute = () => {
  let { loggedInUSer } = useContext(Auth);
  if(!loggedInUSer){
    return <Navigate to="/auth"/>
  }
  return <Outlet/>
}

export default ProtectedRoute