import React from 'react'
import axios from 'axios'
import { axiosInstance } from './config/axiosinstance'

const App = () => {
let FetchData = async()=>{
  try {
    let res = await axiosInstance.get('/users')
     console.log(res);
  } catch (error) {
    console.log(error);
  }
} 

FetchData();

  return (
    <div>App</div>
  )
}

export default App

