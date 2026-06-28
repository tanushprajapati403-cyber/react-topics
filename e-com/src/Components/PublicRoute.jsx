import React, { useContext } from 'react'
import { Auth } from '../Context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const PublicRoute = () => {
  let { loggedInUSer } = useContext(Auth);
  if(loggedInUSer){
    return <Navigate to="/H"/>
  }
  return <Outlet/>
}

export default PublicRoute;