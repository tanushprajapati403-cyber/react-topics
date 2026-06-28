import React from 'react'

function Card({card}) {
  return (
<div className='card'>

    <div className='img'>
      <img src={card.Profilepicture} alt="" />
    </div>
    
    <h1>{card.Name}</h1>
    <h2>{card.Occupation}</h2>
    <h4>{card.Info}</h4>
    
</div>


  )
}

export default Card