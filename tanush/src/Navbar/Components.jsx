import React from 'react'
import {Heart} from 'lucide-react'
import {Eye} from 'lucide-react'

function Components({del , fnc}) {
  return (
<div  className='flex flex-col justify-around h-[50%] w-[30%] p-5 bg-gray-100 rounded-3xl items-center'>
    <div className='h-full w-full p-2'>
             <div className="h-70 w-full p-0">
              <video autoPlay loop muted className="w-full h-full object-cover overflow-hidden rounded-3xl" src={del.video}/>
             </div>
    </div>


 <div className='flex justify-around h-full w-full p-3'>
    <div className='flex h-full w-full gap-3 p-1 items-center'>
         <button className='w-[25%] h-[25%] object-fit overflow-hidden rounded-[20px] cursor-pointer'><img src={del.img} alt="" /></button>
         <h1 className='underline cursor-pointer'>{del.h1}</h1>
         <button onClick={()=>fnc(del)}  className='hover:bg-gray-200 hover:text-black px-2 rounded-4xl border cursor-pointer'>{del.btn}</button>
    </div>
    <div className='flex h-10.1 w-full justify-evenly p-1 items-center'>
        <h1 className='flex gap-2 items-center text-center'><button className='hover:text-red-500 cursor-pointer'><Heart /></button>{del.h2}</h1>
        <h1 className='flex gap-2 items-center text-center'><Eye />{del.h3}</h1>
    </div>
 </div>


</div>
  )
}

export default Components