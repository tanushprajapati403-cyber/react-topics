import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Form({setEmployee , employee , Settoggle , isedited }) {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({mode:"onChange",
    defaultValues : isedited ,
  });


  let Submits = (data) => {
    // console.log(data);
    if (isedited){
     setEmployee((prev)=>{
      return prev.map((val)=>{
      return val.emp_email == isedited.emp_email ? {...val , ...data} : val
      })
     })
    }else{
      setEmployee([...employee , data]);
    }
   
     reset();
    Settoggle(false);
  };

  console.log(employee);
  return (
    <div className=" flex flex-col items-center text-center gap-7 shadow-xl border border-gray-300 rounded-3xl px-8 py-9">
      <h1 className="text-5xl font-semibold text-blue-500">
        Add Employee Details
      </h1>
      <form
        onSubmit={handleSubmit(Submits)}
        className="flex flex-col gap-3 "
        action=""
      >
        <input
          {...register("emp_name", { required: "name is required" })}
          type="text"
          placeholder="Employe Name"
          className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
        />{" "}
        {errors.emp_name && <p className="text-red-700">{errors.emp_name.message}</p>}
        <input
          {...register("emp_email", { required: "email is required" })}
          type="text"
          placeholder="Employe Email"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
        />
        {errors.emp_email && <p className="text-red-700">{errors.emp_email.message}</p>}
        <input
          {...register("emp_mobile", { 
            required: "mobile is required",
            minLength:{value : 10 , message : "minimun 10 number required"},
            maxLength:{value : 10 , message : "maximum 10 number required"},
           })}
          type="text"
          placeholder="Employe Mobile"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
        />
        {errors.emp_mobile && <p className="text-red-700">{errors.emp_mobile.message}</p>}
        <input
          {...register("emp_des", { required: "designation is required" })}
          type="text"
          placeholder="Employe Designation"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
        />
        {errors.emp_des && <p className="text-red-700">{errors.emp_des.message}</p>}
        <div className="flex items-center justify-around gap-4">
          <div className="flex gap-3">
            <span>Manager</span>
            <input
              name="role"
              {...register("role",{required : "role is required"})}
              value="Manager"
              type="radio"
            />
            {errors.role && <p>{errors.role.message}</p>}
          </div>
          <div className="flex gap-3">
            <span>Employee</span>
            <input
              name="role"
              {...register("role",{required : "role is required"})}
              value="Employee"
              type="radio"
            />
            {errors.role && <p>{errors.role.message}</p>}
          </div>
        </div>
        <button disabled={!isValid} className={`rounded-xl w-full text-white py-4 cursor-pointer ${isValid ? "bg-green-600": "bg-gray-200"}`}>
          Add Employe
        </button>
      </form>
    </div>
  );
}

export default Form;
