import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '../pages/Home'
import Contect from '../pages/Contect'
import About from '../pages/About'
import NestageRouter from '../pages/NestageRouter'


const AppRouter = () => {
    let router = createBrowserRouter([
        {
            path:'/',
            element:<Home/>,
            children:[{
                path:"",
                element:<NestageRouter/>
            }]
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/contect',
            element:<Contect/>
        }
    ])
  return <RouterProvider router={router}/>
}

export default AppRouter