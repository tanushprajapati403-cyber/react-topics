import React from "react";
import { useContext } from "react";
import "remixicon/fonts/remixicon.css";
import { Auth } from "../contextapi/Context";

const Navbar = () => {
  let { setActivePage, setLoggedInUser, activePage } = useContext(Auth);

  let handleLogout = () => {
    localStorage.removeItem("userToken");
    setLoggedInUser(null);
    setActivePage("login");
  };

  return (
    <div className="text-white flex  items-center justify-between fixed w-full  top-0 left-0 bg-black/50 backdrop-blur-md z-50 px-37 py-4 border-b border-white">
      <h1 className="cursor-pointer font-bold font-clash text-[18px] tracking-tight">
        <button className=" px-1.75 py-0.5 rounded-[10px] bg-[#C8F400] text-black">
          <i className="ri-flashlight-fill"></i>
        </button>{" "}
        Sky<span className="text-[#C8F400]">Mart</span>
      </h1>
      <div className="text-white flex  items-center justify-around gap-6.25">
        <h3
          onClick={() => setActivePage("home")}
          className={`cursor-pointer transition-colors ${
            activePage === "home" ? "text-[#C8F400] text-xl" : "text-white"
          }`}
        >
          Home
        </h3>

        <h3
          onClick={() => setActivePage("shop")}
          className={`cursor-pointer transition-colors ${
            activePage === "shop" ? "text-[#C8F400] text-xl" : "text-white"
          }`}
        >
          Shop
        </h3>

        <h3
          onClick={() => setActivePage("about")}
          className={`cursor-pointer transition-colors ${
            activePage === "about" ? "text-[#C8F400] text-xl" : "text-white"
          }`}
        >
          About
        </h3>
      </div>
      <div className="flex gap-2.5">
        <button className="border px-3 py-1 rounded-[10px]">
          <button className=" px-2.5 py-0.5 rounded-[10px] bg-[#C8F400] text-black">
            T
          </button>{" "}
          tanush
        </button>
        <button className="cursor-pointer px-3 py-1 rounded-[10px] border text-gray-200">
          <i className="ri-shopping-cart-2-line"></i>
        </button>
        <button
          onClick={handleLogout}
          className="cursor-pointer px-3 py-1 rounded-[10px] border text-gray-200"
        >
          <i className="ri-logout-box-r-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
