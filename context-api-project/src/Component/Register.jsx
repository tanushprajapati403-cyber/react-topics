import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Auth } from '../Context/AuthContext';

function Register() {
  let {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({mode : "onChange"});

   let  {setToggle , registeredUsers , setRegisteredUsers} = useContext(Auth);

let handleFormSubmit = (data)=>{
    let arr = [... registeredUsers , data] ;
    setRegisteredUsers(arr);
    localStorage.setItem("regusers" ,  JSON.stringify(arr));
    reset();
}
console.log()

  return (
    <div className="flex flex-col items-center justify-center text-center gap-10 shadow-xl border border-gray-900 rounded-3xl px-15 py-10">
      <h1 className="text-5xl font-semibold text-blue-500">Register</h1>
      <form
        className="flex flex-col items-center justify-center gap-5"
        onSubmit={handleSubmit(handleFormSubmit)}
        action=""
      >
         <input
          className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4 cursor-pointer"
          {...register("name", { required: "Name is requered" })}
          type="name"
          placeholder="name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        <input
          className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4 cursor-pointer"
          {...register("email", { required: "Email is requered" })}
          type="email"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        <input
          className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4 cursor-pointer"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "At least 8 characters are required",
            },
          })}
          type="password"
          placeholder="password"
        />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        <button disabled={!isValid} className={`rounded-xl  w-full text-white py-4 cursor-pointer ${isValid ? "bg-green-600": "bg-gray-400"}`}>
          Create
        </button>
        <div>
          <p>
            Already have an account? {" "}
            <span onClick={()=>{setToggle(false)}} className="cursor-pointer text-blue-600">Login here</span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register