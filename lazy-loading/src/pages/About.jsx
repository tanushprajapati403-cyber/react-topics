import React, { lazy, Suspense } from 'react'
let Contact = lazy(()=>import('./Contact'))

const About = () => {
  return (
    <div>
      <Suspense fallback={<h1>Loading are start......</h1>}>
        <Contact/>
      </Suspense>
    </div>
  )
}

export default About