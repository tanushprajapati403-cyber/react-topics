import React, { useState } from 'react'

const App = () => {

  let [count , setCount]=useState({
    name:"tanush",
    age:"18",
    collage:"sirt",
  });
  let updateAge = ()=>{
  setCount({...count,name:"tsbdhc"})   // ess object me direct particular value change ker sakte hai key ke duara.
  console.log(count)
  };


// let [count , setCount]=useState(["tanush","18","sirt"]);

// let updateAge = ()=>{

// // setCount(["tandfss", "19", "sirt"]);  //ess se bhe  easilly  chnge ker sak tee hai kam value ho jab.

// let newArray = [...count];      // index number se change.
//     newArray[0] = "tamnjhu";
//     setCount(newArray);

// let newArray = [...count,"bhopal"];  //ess me essa likhne se puranane balle array ke last me add ho jayega.

// let newArray = ["bhopal", ...count];  //ess me essa likhne se puranane balle array ke starting me add ho jayega.

//   console.log(count)
// }



  return (
    <div>
      {/* object ke lye */}

     <h1>User: {count.name}</h1>
      <p>Age: {count.age}</p>
      <p>College: {count.collage}</p>


      {/* Array ke lye */}
       
       {/* <h1>User: {count[0]}</h1>
      <p>Age: {count[1]}</p>
      <p>College: {count[2]}</p> */}
      
      <button onClick={updateAge}>Update Age</button>
    </div>
  )
}

export default App