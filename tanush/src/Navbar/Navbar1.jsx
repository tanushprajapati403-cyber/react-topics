import React from 'react'
import {ChevronDown} from 'lucide-react'
function Navbar1({values}) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-24'>
       <button className='font-bold text-[35px] font-serif italic'>{values.btn}</button> 
        <h1 className='text-[18px] cursor-pointer underline flex gap-2 items-center'>{values.p1}<ChevronDown /></h1>
        <h1 className='text-[18px] cursor-pointer underline flex gap-2 items-center'>{values.p2}<ChevronDown /></h1>
        <h1 className='text-[18px] cursor-pointer underline flex gap-2 items-center'>{values.p3}<ChevronDown /></h1>
        <h1 className='text-[18px] cursor-pointer underline flex gap-2 items-center'>{values.p4}<ChevronDown /></h1>
        </div>
       <div className='flex text-xl gap-5'>
        <button className='bg-white p-3 rounded-4xl  hover:bg-black hover:text-white cursor-pointer'>{values.btn1}</button>
        <button className='bg-black text-white p-3 rounded-4xl  hover:bg-white hover:text-black cursor-pointer'>{values.btn2}</button>
       </div>
    </div>
  )
}

export default Navbar1