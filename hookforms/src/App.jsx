import React from "react";
import { useForm } from "react-hook-form";

function App() {

  let { register, handleSubmit, reset } = useForm();

  return (
    <div className="h-full w-full p-12.5">
      <div className="h-full w-[50%] text-center shadow-xl border border-gray-300 rounded-3xl px-8 py-6">
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
          action=""
          className="flex flex-col item-center justify-center gap-3.75 "
        >
          <input
            minLength={3}
            maxLength={30}
            pattern="^[a-zA-Z\s]{15,20}$"
            title="Naam 3-30 characters ka ho aur sirf letters hon"
            {...register("name")}
            type="text"
            placeholder="name"
            required
            className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          />
          <input
            minLength={8}
            maxLength={35}
            pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
            title="Sahi email format mein daalein (example@domain.com)"
            {...register("email")}
            type="text"
            placeholder="email"
            required
            className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          />
          <input
            pattern="^[6-9]\d{9}$"
            min={10}
            max={10}
            title="10-digit ka mobile number jo 6,7,8,9 se shuru ho"
            {...register("mobile")}
            type="text"
            placeholder="mobile"
            required
            className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          />
          <input
            pattern="^(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$"
            minLength={8}
            maxLength={8}
            title="Password 8 characters ka ho, jisme 1 number aur 1 symbol (@$!%*?&) zaroor ho."
            {...register("password")}
            type="password"
            placeholder="password"
            required
            className=" border-2 text-xl rounded-xl border-gray-300 py-3 px-4"
          />
          <button className="rounded-xl bg-green-600 w-full text-white py-4 cursor-pointer">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
