import React , { useState } from 'react'

function Form() {
   
   let [formValues , setFormValues] = useState({});
   let [products,setProducts] =useState([]);


   let hadelSubmit = (e)=>{
    e.preventDefault();
    setProducts([...products , formValues])
    console.log(formValues);
   };

    console.log(products);

   let handleChange = (e)=>{
    let {name , value} = e.target ; 
    setFormValues({... formValues , [name] : value  });
   }
    

  return (
    <div className='flex flex-col items-center text-center gap-10 shadow-xl border border-gray-300 rounded-3xl px-8 py-6'>
        <h1 className="text-5xl font-semibold text-blue-500">Add Employee Details</h1>
        <form onSubmit={hadelSubmit} className='flex flex-col gap-5 ' action="">
            <input onChange={handleChange} name='employe_name' type="text" placeholder='Employe Name' required className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"/>
            <input onChange={handleChange} name='employe_email' type="text" placeholder='Employe Email' required className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"/>
            <input onChange={handleChange} name='employe_mobile' type="text" placeholder='Employe Mobile' required className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"/>
            <input onChange={handleChange} name='employe_designation' type="text" placeholder='Employe Designation' required className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"/>
            <div className='flex items-center justify-around gap-4'>
                <div className='flex gap-3'>
                    <span>Manager</span>
                    <input name='role' onChange={handleChange} value="Manager" type="radio" />
                </div>
                <div className='flex gap-3'>
                    <span>Employee</span>
                    <input name='role' onChange={handleChange} value="Employee" type="radio" />
                </div>
            </div>
            <button className='rounded-xl bg-green-600 w-full text-white py-4 cursor-pointer'>Add Employe</button>
        </form>
    </div>
  )
}

export default Form


