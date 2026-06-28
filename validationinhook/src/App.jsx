import React from "react";
import { useForm } from "react-hook-form";

function App() {
  let {
    register,
    handleSubmit,
    reset,
    formState : { errors , isValid}
  } = useForm();
  console.log("errors :" , errors );
  console.log("IsValid :" , isValid );

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
        })}
        action=""
      >
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          placeholder="name"
        />
        <br />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <br />

        <input
          {...register("email", { required: "email is required" })}
          type="text"
          placeholder="email"
        />
        <br />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <br />

        <input
          {...register("pass", { required: "password is required" })}
          type="text"
          placeholder="password"
        />
        <br />
        {errors.pass && <p style={{ color: "red" }}>{errors.pass.message}</p>}
        <br />

        <input
          {...register("mobile", {
            required: "mobile is required",
            minLength: { value: 10, message: "minimum 10 digits are required" },
            maxLength: { value: 10, message: "maximum 10 digits are required" },
          })}
          type="text"
          placeholder="mobile"
        />
        <br />
        {errors.mobile && (<p style={{ color: "red" }}>{errors.mobile.message}</p>)}
        <br />

        <button disabled={!isValid}>Submnit</button>
      </form>
    </div>
  );
}

export default App;
