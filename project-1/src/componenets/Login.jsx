import React, { useContext } from "react";
import { Auth } from "../contextapi/Context";
import { useForm } from "react-hook-form";

const Login = () => {
  let { setToggle, setLoggedInUser, registeredUsers } = useContext(Auth);
  let {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  let FormSubmit = (data) => {
    let user = registeredUsers.find(
      (elem) => elem.password === data.password && elem.email === data.email,
    );
    if (!user) {
      alert("Invalid email & password");
      return;
    }
    localStorage.setItem("loginuser", JSON.stringify(user));
    setLoggedInUser(user);
    alert("logined successfully");
    reset();
  };

  return (
    <div className="flex h-screen w-full">
      <div className="flex flex-col p-10 border-r border-gray-200 w-[50%] py-25">
        <div className="flex gap-5">
          <h1 className="bg-[#C8F400] px-2 py-2 text-4xl rounded-2xl animate-float">
            <i className="ri-flashlight-fill"></i>
          </h1>
          <h1 className="text-white text-3xl font-bold text-center">
            About<span className="text-[#C8F400]">SkyMart</span>
          </h1>
        </div>
        <h1 className="text-[#C8F400] mt-10 text-[15px] font-bold">
          WELCOME BACK
        </h1>
        <br />
        <h1 className="text-white text-6xl font-bold">
          Shop the future. <br />
          <span className="text-[#C8F400] text-6xl font-bold">Today.</span>
        </h1>
        <br />
        <h1 className="text-[#ffffff8e]">
          Thousands of products, lightning-fast delivery, and <br /> prices that
          make your wallet happy.
        </h1>
        <div>
          <div className="flex gap-5 mt-10">
            <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-15 py-5 bg-[#ffffff08]">
              <h1 className="text-white text-2xl font-semibold">
                20<span className="font-bold text-3xl">K+</span>
              </h1>
              <h1 className="text-[#ffffff51] text-[15px]">Products</h1>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-15 py-5 bg-[#ffffff08]">
              <h1 className="text-white text-2xl font-semibold">
                50<span className="font-bold text-3xl">K+</span>
              </h1>
              <h1 className="text-[#ffffff51] text-[15px]">Users</h1>
            </div>
            <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-15 py-5 bg-[#ffffff08]">
              <h1 className="text-white text-2xl font-semibold">
                4.9<span className="font-bold text-3xl">K+</span>
              </h1>
              <h1 className="text-[#ffffff51] text-[15px]">Rating</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-[50%] h-full rounded-2xl">
        <div className="flex-col bg-[#ffffff1a] px-10 py-5 rounded-2xl w-[60%]">
          <h1 className="text-4xl text-white font-bold">Sign in</h1>
          <h5 className="text-[15px] text-[#ffffff6b] mt-2">
            Enter your credentials to continue
          </h5>
          <form
            onSubmit={handleSubmit(FormSubmit)}
            className="flex flex-col gap-4 mt-8"
          >
            <div className="flex flex-col">
              <div className="relative flex items-center">
                <i className="ri-mail-line text-[20px] text-gray-500 absolute left-3"></i>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email Address"
                  className="focus:bg-transparent w-full px-10 py-3 rounded-2xl text-white border border-gray-200 focus:outline-none bg-transparent focus:border-[#C8F400]"
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
                <i className="ri-lock-line text-[20px] text-gray-500  absolute left-3"></i>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "same password enter",
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

            <button
              disabled={!isValid}
              className={`px-3 py-3 rounded-2xl text-2xl mt-4 transition-colors ${isValid ? "bg-[#C8F400] cursor-pointer" : "bg-gray-600 cursor-not-allowed text-gray-400"}`}
            >
              Sign in <i className="ri-arrow-right-line"></i>
            </button>
          </form>
          <h1 className="text-[#ffffff6b] text-center mt-5">
            Don't have an account?{" "}
            <span
              onClick={() => {
                setToggle((prev) => !prev);
              }}
              className="text-[#C8F400] cursor-pointer"
            >
              Create one
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
