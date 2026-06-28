import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "remixicon/fonts/remixicon.css";
import { Auth } from "../Context/AuthContext";
import {nanoid} from 'nanoid'

const Register = ({ setToggle }) => {
  let {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  let {registerUsers , setRegisterUsers} = useContext(Auth);  

  let FormSubmit = (data) => {
    let arr = [...registerUsers , {...data , id: nanoid() } ];
    setRegisterUsers(arr);
    localStorage.setItem("reg users" , JSON.stringify(arr));
    alert("user are registered");
    reset();
  };

  console.log(register);
  return (
    <div className="flex items-center justify-center w-[50%] h-full rounded-2xl ml-95 mt-20">
      <div className="flex-col bg-[#ffffff1a] px-10 py-5 rounded-2xl w-[60%]">
        <h1 className="text-4xl text-white font-bold text-center">
          Register account
        </h1>
        <h5 className="text-[15px] text-[#ffffff6b] mt-2 text-center">
          Join SkyMart and start shopping
        </h5>
        <form
          onSubmit={handleSubmit(FormSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
          <div className="flex flex-col">
            <div className="relative flex items-center">
              <i className="ri-user-line text-[20px]  text-gray-500  absolute left-4"></i>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                placeholder="Full name"
                className="w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
              />
            </div>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          <div className="flex flex-col">
            <div className="relative flex items-center">
              <i className="ri-mail-line text-[20px]  text-gray-500  absolute left-4"></i>
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email address"
                className="w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
              />
            </div>
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col">
            <div className="relative flex items-center">
              <i className="ri-lock-line text-[20px]  text-gray-500  absolute left-4"></i>
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "At least 6 characters are required",
                  },
                })}
                type="password"
                placeholder="Password"
                className="w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
              />
            </div>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          <button
            disabled={!isValid}
            className={`px-3 py-3 rounded-2xl text-2xl mt-4  ${isValid ? "bg-[#C8F400] cursor-pointer" : "bg-gray-600 cursor-not-allowed text-gray-400"}`}
          >
            Sign Up <i className="ri-arrow-right-line"></i>
          </button>
        </form>
        <h1 className="text-[#ffffff6b] text-center mt-5">
          Already have an account?{" "}
          <span
            onClick={() => {
              setToggle((prev) => !prev);
            }}
            className="text-[#C8F400] cursor-pointer"
          >
            Sign in
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Register;
