import React from "react";
import { useForm } from "react-hook-form";
function Form() {
  let { register , handleSubmit, reset } = useForm();


   let submits= (data)=>{
    console.log(data);
    reset();
   }


  return (
    <div className=" flex flex-col items-center text-center gap-7 shadow-xl border border-gray-300 rounded-3xl px-8 py-9">
      <h1 className="text-5xl font-semibold text-blue-500">
        Add Employee Details
      </h1>
      <form onSubmit={handleSubmit(submits)} className="flex flex-col gap-3 " action="">
        <input
        {...register("Emp_name")}
          type="text"
          placeholder="Employe Nmae"
          className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
        />
        <input
        {...register("Emp_email")}
          type="text"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          placeholder="Employe Email"
        />
        <input
        {...register("Emp_mobile")}
          type="text"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
           placeholder="Employe Mobile"
        />
        <input
        {...register("Emp_des")}
          type="text"
          className="border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
           placeholder="Employe Designation"
        />
        <div className="flex items-center justify-around gap-4">
          <div className="flex gap-3">
            <span>Manager</span>
            <input type="radio" />
          </div>
          <div className="flex gap-3">
            <span>Employee</span>
            <input type="radio" />
          </div>
        </div>
        <button
          className={
            "rounded-xl w-full text-white py-4 cursor-pointer bg-green-600"
          }
        >
          Add Employe
        </button>
      </form>
    </div>
  );
}

export default Form;
