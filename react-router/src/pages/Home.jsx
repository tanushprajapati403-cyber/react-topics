import React from 'react'
import { useNavigate } from 'react-router';


const Home = () => {

  let naviget = useNavigate();
  return (

    <div>
        <h1>home</h1>
        <button onClick={()=>naviget("/shop")}>button</button>
        </div>
  )
}

export default Home