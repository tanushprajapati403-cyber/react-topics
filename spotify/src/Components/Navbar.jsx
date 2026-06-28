import React from "react";
import { NavLink } from "react-router";
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5  backdrop-blur-md border-b-2 border-[#C8F400] fixed top-0 left-0 w-full h-24">
      <h1 className="text-3xl text-[#C8F400]">
        <i class="ri-spotify-fill"></i> MUSICs.
      </h1>
      <div className="flex items-center justify-around text-2xl gap-8 text-center">
        <NavLink className={({isActive}) =>  isActive  ? "rounded-[100%] text-center shadow-[0_0_10px_#C8F400] transition-all border border-[#C8F400]/30 shrink-0" : "" } to="/home">
          <button className="bg-[#C8F400] text-white rounded-[100%] px-1.5 py-1.5 mt-1">
            <button className="px-2 py-0.5 rounded-[100%] bg-[#181817a9] text-2xl">
              <i class="ri-home-9-fill"></i>
            </button>
          </button>
        </NavLink>
        <div className="border h-15 rounded-3xl flex w-full relative border-none">
          <i className="ri-search-line text-gray-400 text-2xl mt-3.5 absolute left-8"></i>
          <input
            className="focus:outline-none cursor-pointer border border-[#ffffff1a] bg-[#ffffff0d] text-gray-200 rounded-2xl px-20 py-6 flex items-center justify-center focus-within:border-[#C8F400] focus-within:shadow-[0_0_20px_rgba(200,244,0,0.3)]"
            type="search"
            placeholder="Search...."
          />
          <i class="ri-inbox-2-fill text-gray-400 text-2xl mt-3.5 absolute left-95"></i>
        </div>
        <NavLink className={({isActive})=>isActive ? "rounded-[100%] text-center shadow-[0_0_10px_#C8F400] transition-all border border-[#C8F400]/30 shrink-0" : "" } to="/musicCard">
          <button className="bg-[#C8F400] text-white rounded-[100%] px-1.5 py-1.5 ">
          <button className=" px-2 py-0.5 rounded-[100%] bg-[#181817a9] text-xl">
            <i class="ri-heart-add-fill"></i>
          </button>
        </button>
        </NavLink>
      </div>
      <div className="flex items-center justify-around gap-7">
        <button className="text-white text-2xl px-2 py-1 hover:rounded-[100%] hover:px-2 hover:py-1 hover:bg-[#C8F400] hover:text-white">
          <i class="ri-notification-3-fill"></i>
        </button>
        <button className="text-white text-2xl px-2 py-1 hover:rounded-[100%] hover:px-2 hover:py-1 hover:bg-[#C8F400] hover:text-white">
          <i class="ri-user-line"></i>
        </button>
        <button className="bg-[#C8F400] text-white rounded-[100%] px-1.5 py-1.5 ">
          <button className=" px-3 py-1 rounded-[100%] bg-[#181817a9] text-xl">
            T
          </button>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
