import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import MusicCard from '../Components/MusicCard'

const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/musicCard' element={<MusicCard/>}></Route>
        </Routes>
    </div>
  )
}

export default Router