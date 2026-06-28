import React from 'react'

function First({setData}) {
  return (
        <div className='h-[70%] w-[30%] bg-gray-200 flex flex-col justify-center items-center rounded-[20px] gap-5'>
            
                <div>
                    <h1 className='text-[38px] font-bold'>Create account</h1>
                    <h2 className='text-[16px] text-gray-500 text-center'>Join us today</h2>
                </div>
            

                <div>
                <label>Full Name</label>
                <input type="text" 
                placeholder="     John doe"
                className='flex flex-col w-100 h-10 bg-gray-300 text-white rounded-[10px] border'/>
                </div>


               <div>
                <label>Email</label>
                <input type="text" 
                placeholder="     you@example.com"
                className='flex flex-col w-100 h-10 bg-gray-300 text-white rounded-[10px] border'/>
               </div>


                <div className=''>
                <label>Password</label>
                <input type="text"  
                placeholder="     *********"
                className='flex flex-col w-100 h-10 bg-gray-300 text-white rounded-[10px] border'/>
                </div>

           <button className='w-100 h-10 bg-black text-white rounded-[10px]'>Sign up</button>

           <h2 className='text-[15px] text-gray-500 text-center'>Already have an account? <a onClick={()=>{setData(false)}} className='text-black cursor-pointer'>Sign in</a></h2>
        </div>
  )
}

export default First