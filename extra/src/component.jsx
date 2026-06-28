import React from 'react'

function Component() {
  return (
<div className='border h-100 w-100 flex flex-col gap-2.5 p-2.5 rounded-[10px] mt-6 '>

      <div className='h-100 w-100 flex item-center justify-center'> 
         <img className='h-65 w-70 ' src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
        </div>
        <div className='flex justify-around item-center'>
            <h1 className='text-[25px]'>    </h1>
            <button className='flex bg-red-500 rounded-[10px] p-1.25'>DELETE</button>
        </div>
        <div className='flex justify-around item-center'>
            <div>
                 <h2 className='text-[15px] '>Quantity : </h2>
                  <h1 className='text-[25px] text-green-300 '></h1>
            </div>
            <div className='bg-gray-400 p-2 rounded-2xl'> <button className='bg-gray-300 p-2 rounded-2xl'>-</button> COUNT <button className='bg-gray-300 p-2 rounded-2xl'>+</button> </div>
        </div>
    </div>
)
}

export default Component