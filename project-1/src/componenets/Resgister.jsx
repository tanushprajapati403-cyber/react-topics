import React, { useContext } from "react";
import { Auth } from "../contextapi/Context";
import { useForm } from "react-hook-form";

const Resgister = () => {
  let { setToggle, registeredUsers, setRegisteredUsers } = useContext(Auth);
  let {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  let FormSubmit = (data) => {
    let array = [...registeredUsers, data];
    setRegisteredUsers(array);
    localStorage.setItem("registerusers", JSON.stringify(array));
    alert("Rgistered successfully");
    reset();
    setToggle(false);
  };

  console.log(registeredUsers);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex gap-5 absolute top-8">
        <h1 className="bg-[#C8F400] px-2 py-2 text-4xl rounded-2xl animate-float">
          <i className="ri-flashlight-fill"></i>
        </h1>
        <h1 className="text-white text-3xl font-bold text-center">
          About<span className="text-[#C8F400]">SkyMart</span>
        </h1>
      </div>
      <div className="flex items-center justify-center w-[50%] h-full rounded-2xl  mt-19">
        <div className="flex-col bg-[#ffffff1a] px-10 py-5 rounded-2xl w-[60%]">
          <h1 className="text-4xl text-white font-bold text-center">
            Create account
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
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.name.message}
                </p>
              )}
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
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="relative flex items-center">
                <i className="ri-lock-line text-[20px]  text-gray-500  absolute left-4"></i>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "At least 8 characters are required",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                  className="w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1 ml-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <div className="relative flex items-center">
                <i className="ri-lock-line text-[20px]  text-gray-500  absolute left-4"></i>
                <input
                  {...register("confirmpassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                    minLength: {
                      value: 8,
                      message: "same password enter",
                    },
                  })}
                  type="password"
                  placeholder="Confirm password"
                  className="w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
                />
              </div>
            </div>
            {errors.confirmpassword && (
              <p className="text-red-500 text-sm mt-1 ml-2">
                {errors.confirmpassword.message}
              </p>
            )}

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
    </div>
  );
};

export default Resgister;
