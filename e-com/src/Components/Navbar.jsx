import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { Auth } from "../Context/AuthContext";

const Navbar = () => {
  let navigate = useNavigate();
  let { loggedInUSer, setLoggedInUSer } = useContext(Auth);
  return (
    <div className="h-[10%] mb-8 shadow-md flex justify-between px-10 items-cente text-2xl text-white py-5 bg-[#C8F400]">
      <h1>E-com</h1>
      {loggedInUSer ? (
        <div className="flex items-center gap-10 font-semibold">
          <NavLink
            className={({ isActive }) => (isActive ? "text-black" : "")}
            to="/H"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-black" : "")}
            to="/S"
          >
            Shop
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "text-black" : "")}
            to="/C"
          >
            Cart
          </NavLink>
        </div>
      ) : null}

      {loggedInUSer ? (
        <div>
          <h1
            className="px-5 py-2 rounded-3xl border cursor-pointer border-red-500 text-red-500"
            onClick={() => {
              localStorage.removeItem("log user");
              alert("user logged out");
              setLoggedInUSer(null);
              navigate("/auth");
            }}
          >
            logout
          </h1>
        </div>
      ) : (
        <div>
          <h1
            className="px-5 py-2 cursor-pointer border rounded-3xl  border-green-500 text-green-500"
            onClick={() => {
              navigate("/auth");
            }}
          >
            Login
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
