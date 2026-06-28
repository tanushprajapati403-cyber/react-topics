import React from 'react'

function Componenets({a,cards}) {
  return (
<div className='border-2'>

      <div className='h-60 w-65 rounded-[30px]'>
            <img className="h-full w-full object-fit rounded-[30px]" src={a.image} alt="" />
      </div>
    <h1>{a.title}</h1>
    <h2>{a.price}</h2>
    <button onClick={()=>{cards(a.id)}} className='bg-red-500 p-1 rounded-[10px]'>remove</button>
</div>
)
}

export default Componenets