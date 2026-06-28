import React, { useContext } from 'react'
import { Mystore } from '../Context/MyContext'

function About() {

 let data = useContext(Mystore);
 console.log(data);
  return (
    <div>About</div>
  )
}

export default About