import React from "react";
import Extra from "./Extra";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-24 py-5">
      <h1 className="bg-[#C8F400] px-4 py-3 text-4xl rounded-3xl animate-float">
        <i class="ri-flashlight-fill"></i>
      </h1>
      <h1 className="text-white text-5xl font-bold text-center">
        About<span className="text-[#C8F400]">SkyMart</span>
      </h1>
      <h1 className=" text-[#ffffff51] text-center text-xl">
        SkyMart is a next-generation e-commerce platform built to make online
        <br />
        shopping fast, fair, and enjoyable — for everyone.
      </h1>
      <div className="flex gap-5 p-5">
        <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-20 py-5 bg-[#ffffff08]">
          <h1 className="text-[#C8F400] text-2xl">
            <i class="ri-box-3-fill"></i>
          </h1>
          <h1 className="text-white text-2xl font-semibold">
            20<span className="font-bold text-3xl">K+</span>
          </h1>
          <h1 className="text-[#ffffff51] text-[15px]">Products</h1>
        </div>
        <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-20 py-5 bg-[#ffffff08]">
          <h1 className="text-[#C8F400] text-2xl">
            <i class="ri-group-line"></i>
          </h1>
          <h1 className="text-white text-2xl font-semibold">
            50<span className="font-bold text-3xl">K+</span>
          </h1>
          <h1 className="text-[#ffffff51] text-[15px]">Happy Customers</h1>
        </div>
        <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-20 py-5 bg-[#ffffff08]">
          <h1 className="text-[#C8F400] text-2xl">
            <i class="ri-star-line"></i>
          </h1>
          <h1 className="text-white text-2xl font-semibold">
            4.9<span className="font-bold text-3xl">K+</span>
          </h1>
          <h1 className="text-[#ffffff51] text-[15px]">Avg.Rating</h1>
        </div>
        <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-20 py-5 bg-[#ffffff08]">
          <h1 className="text-[#C8F400] text-2xl">
            <i class="ri-truck-line"></i>
          </h1>
          <h1 className="text-white text-2xl font-semibold">
            99<span className="font-bold text-3xl">%</span>
          </h1>
          <h1 className="text-[#ffffff51] text-[15px]">Products</h1>
        </div>
      </div>
      <div className="border border-gray-200 rounded-2xl px-10 py-10">
        <h1 className="text-[#ffffff51]">
          <span className="text-white text-3xl font-bold">Our Story</span>{" "}
          <br /> <br />
          SkyMart started in 2022 as a small side project — two engineers tired
          of bloated, slow e-commerce experiences. We asked ourselves: <br />{" "}
          what if shopping online was actually enjoyable? <br /> <br /> Three
          years later, SkyMart serves over 50,000 customers across the country.
          We stock electronics, fashion, jewelry, and everyday <br /> essentials
          — all at prices that don't require a second mortgage. <br /> <br />{" "}
          We're still the same team at heart: obsessed with speed, transparency,
          and making you feel good about every purchase you make here.
        </h1>
      </div>
      <br />
      <h1 className="text-white text-2xl font-bold">What We Stand For</h1>
      <div className="flex items-center justify-around gap-6 flex-wrap ">
        <div className="border border-gray-200 px-10 py-5 rounded-2xl flex gap-5 items-center justify-center hover:border-[#C8F400]">
          <h1 className="px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-2xl">
            <i class="ri-shield-check-line"></i>
          </h1>
          <div>
            <h1 className="text-white font-bold">Trust</h1>
            <h2 className="text-[#ffffff51]">
              Every product is verified for quality and authenticity <br />{" "}
              before listing.
            </h2>
          </div>
        </div>
        <div className="border border-gray-200 px-10 py-5 rounded-2xl flex gap-5 items-center justify-center hover:border-[#C8F400]">
          <h1 className="px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-2xl">
            <i class="ri-truck-line"></i>
          </h1>
          <div>
            <h1 className="text-white font-bold">Trust</h1>
            <h2 className="text-[#ffffff51]">
              Every product is verified for quality and authenticity <br />{" "}
              before listing.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around gap-6 flex-wrap ">
        <div className="border border-gray-200 px-10 py-5 rounded-2xl flex gap-5 items-center justify-center hover:border-[#C8F400]">
          <h1 className="px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-2xl">
            <i class="ri-service-line"></i>
          </h1>
          <div>
            <h1 className="text-white font-bold">Trust</h1>
            <h2 className="text-[#ffffff51]">
              Every product is verified for quality and authenticity <br />{" "}
              before listing.
            </h2>
          </div>
        </div>
        <div className="border border-gray-200 px-10 py-5 rounded-2xl flex gap-5 items-center justify-center hover:border-[#C8F400]">
          <h1 className="px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-2xl">
            <i class="ri-star-line"></i>
          </h1>
          <div>
            <h1 className="text-white font-bold">Trust</h1>
            <h2 className="text-[#ffffff51]">
              Every product is verified for quality and authenticity <br />{" "}
              before listing.
            </h2>
          </div>
        </div>
      </div>
      <br />
      <h1 className="text-white text-2xl font-bold">Meet the Team</h1>
     <div className="flex gap-5">
      <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-17.5 py-5 bg-[#ffffff08]">
        <h1 className="text-black text-2xl bg-[#C8F400] px-4 py-2 rounded-2xl">A</h1>
        <h1 className="text-white text-[15px] font-semibold mt-2">Aryan Shah</h1>
        <h1 className="text-[#ffffff51] text-[15px]">Founder & CEO</h1>
      </div>
      <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-17.5 py-5 bg-[#ffffff08]">
        <h1 className="text-black text-2xl bg-blue-400 px-4 py-2 rounded-2xl">P</h1>
        <h1 className="text-white text-[15px] font-semibold mt-2">Priya Mehta</h1>
        <h1 className="text-[#ffffff51] text-[15px]">Head of Product</h1>
      </div>
      <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-17.5 py-5 bg-[#ffffff08]">
        <h1 className="text-white text-2xl bg-violet-400 px-4 py-2 rounded-2xl">R</h1>
        <h1 className="text-white text-[15px] font-semibold mt-2">Rohan Verma</h1>
        <h1 className="text-[#ffffff51] text-[15px]">Lead Engineer</h1>
      </div>
        <div className="border rounded-2xl border-gray-200 flex flex-col items-center justify-center px-17.5 py-5 bg-[#ffffff08]">
        <h1 className="text-white text-2xl bg-red-400 px-4 py-2 rounded-2xl">S</h1>
        <h1 className="text-white text-[15px] font-semibold mt-2">Sneha Kapoor</h1>
        <h1 className="text-[#ffffff51] text-[15px]">Design Director</h1>
      </div>
     </div>
     <div className="border border-[#C8F400] text-center px-83 py-10 rounded-2xl flex flex-col gap-8 mt-9">
     <div className="flex flex-col gap-1">
      <h1 className="text-white font-bold text-2xl">Ready to shop?</h1>
     <h2 className="text-[#ffffff51]">Explore thousands of products at unbeatable prices.</h2>
     </div>
     <button className="bg-[#C8F400]  py-2 rounded-2xl text-2xl">Browse Products <i class="ri-arrow-right-line"></i></button>
     </div>
     <Extra/>
    </div>
  );
};

export default About;
