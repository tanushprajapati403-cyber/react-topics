import React from 'react'

const ProductCard = ({values, fnc}) => {
  return (
    <div  className='flex flex-col items-center justify-center gap-4 text-[1.5rem] bg-blue-100 border-[1rem] border-white p-8 rounded-[30px] h-[70%] w-[25%] '>
        <div className='h-60 w-65 rounded-[30px]'>
            <img className="h-full w-full object-fit rounded-[30px]" src={values.image} alt="" />
        </div>
            <h1>{values.name}</h1>
            <h1>{values.category}</h1>
            <h1>{values.price}</h1>
            <button onClick={()=> fnc(values)} className='bg-red-500 p-1 rounded-[10px]'>Remove</button>
    </div>
  )
}

export default ProductCard