import React, { useEffect } from 'react'

function Home() {

// ess me memory lekage hota hai jesse button pe click kerne pe home ayega jab chalega ye lekin again click hone pe about me bhe home chalega ess liye esse memory lekage kehte hai.
// memory lekage hai ye.

  //    setInterval(()=>{
  //   console.log("home")
  // },1000)
   

// how to handle the memory lekage : 
// return se rook ta hai ye jess change hone per bhe memory lekage na hoo (unmounting)
  let setIntervalss =  setInterval(()=>{
    console.log("home")
  },1000)

  useEffect(()=>{
   
   
   return ()=>{clearInterval(setIntervalss)} 
  },[])




  return (
    <div>Home</div>
  )
}

export default Home