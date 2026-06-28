import React from 'react'

const About = ({incrementCount}) => {

    console.log("about rendering....");
  return (
    <div><h1>This is about</h1></div>
  )
}

export default React.memo(About);
   

// or (React.memo are stop the rerendring);


// const About = React.memo(() => {

//     console.log("about rendering....");
//   return (
//     <div><h1>This is about</h1></div>
//   )
// })

// export default About;