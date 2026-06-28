import React from "react";
import Navbar1 from "../Navbar/Navbar1";
import {Image} from 'lucide-react'
import {UsersRound} from 'lucide-react'
import {Form} from 'lucide-react'
import {Sparkles} from 'lucide-react'
import {Search} from 'lucide-react'

function Fullpage() {
  return (
    <div className="flex flex-col h-full w-full p-5 bg-gray-100 rounded-3xl">
      <div className="flex h-130 w-full">
        <div className="h-full w-full p-5">
          <h1 className="text-[50px] font-bold ">
            Discover the
            <br />
            World's Top Designers
          </h1>
          <h1 className="text-[20px] m-2">
            Explore work from the most talented and accomplished
            <br />
            designers ready to take on your next project.
          </h1>
          <div className="flex text-xl gap-10 m-9 items-center"> 
            <button className="bg-black text-white p-2 rounded-4xl hover:bg-white hover:text-black flex gap-2 items-center px-4 cursor-pointer">
              <Image />Shorts
            </button>
            <button className="text-gray-600 hover:bg-black hover:text-white p-2 rounded-4xl flex gap-2 items-center px-4 cursor-pointer">
              <UsersRound />Designer
            </button>
            <button className="text-gray-600 hover:bg-black hover:text-white p-2 rounded-4xl flex gap-2 items-center px-4 cursor-pointer">
              <Form />Services
            </button>
          </div>
          <div className="flex justify-between bg-gray-200 p-4 rounded-4xl items-center">
            <h1 className="p-1 ">what type of design are you insterested in?</h1>
            <button className="p-1 bg-pink-400 rounded-2xl cursor-pointer"><Search /></button>
          </div>
          <div className="flex items-center m-8 gap-2">
            <h1 className="font-bold text-[16px]">Popular:</h1>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              dashbord
            </button>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              landing page
            </button>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              e-commerce
            </button>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              logo
            </button>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              card
            </button>
            <button className="hover:bg-gray-200 hover:text-black p-1 px-2 rounded-4xl border cursor-pointer">
              icons
            </button>
          </div>
        </div>
        <div className="h-130 w-full p-5">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover overflow-hidden rounded-3xl"
            src="/video.mp4"
          />
        </div>
      </div>
      <div className="bg-gray-300 flex justify-self-stretch p-3 rounded-2xl gap-10 items-center">
      <button  className=" bg-gray-200 px-10 p-3 rounded-4xl flex gap-2 items-center"><Sparkles />Star a Project Breif</button>
      <h1 className="text-gray-600">Tell us what you need and instantly connect with world-class talent ready to work on your project.</h1>
      </div>
    </div>
  );
}

export default Fullpage;
