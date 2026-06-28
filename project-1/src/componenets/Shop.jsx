import React from "react";
import Extra from "./Extra";
import { useContext } from "react";
import { Auth } from "../contextapi/Context";

const Shop = () => {
  let { products } = useContext(Auth);
  return (
    <div>
      <div className="flex flex-col h-full px-37 pt-24 py-5">
        <div className="flex flex-col gap-10 w-full">
          <div>
            <h1 className="text-white text-5xl font-bold">All Products</h1>
            <h2 className="text-gray-200">50 products found</h2>
          </div>
          <div className="border border-gray-200 h-20 rounded-3xl flex px-5 py-5 w-full gap-3 relative">
            <i className="ri-search-line text-gray-400 text-xl mt-1.5 absolute left-8"></i>
            <input
              className=" focus:outline-none cursor-pointer border border-[#ffffff1a] bg-[#ffffff0d] text-gray-200 rounded-2xl px-10 py-5 w-[65%] flex items-center justify-center focus-within:border-[#C8F400] focus-within:shadow-[0_0_20px_rgba(200,244,0,0.3)]"
              type="search"
              placeholder="Search products...."
            />
            <div className="border border-[#ffffff1a] bg-[#ffffff0d] text-gray-200 rounded-2xl px-10 py-5 w-[15%] flex items-center justify-center focus-within:border-[#C8F400] focus-within:shadow-[0_0_20px_rgba(200,244,0,0.3)]">
              <select className=" focus:outline-none cursor-pointer bg-transparent text-white">
                <option className="bg-black">All Categories</option>
                <option className="bg-black">Electronics</option>
                <option className="bg-black">Clothing</option>
                <option className="bg-black">Funniture</option>
                <option className="bg-black">Home</option>
                <option className="bg-black">Sports</option>
                <option className="bg-black">Accessories</option>
              </select>
            </div>
            <div className="border border-[#ffffff1a] bg-[#ffffff0d] text-gray-200 rounded-2xl px-10 py-5 w-[15%] flex items-center justify-center focus-within:border-[#C8F400] focus-within:shadow-[0_0_20px_rgba(200,244,0,0.3)] ">
              <select className=" focus:outline-none cursor-pointer bg-transparent text-white">
                <option className="bg-black">Featured</option>
                <option className="bg-black">Price: Low — High</option>
                <option className="bg-black">Price: High — Low </option>
                <option className="bg-black">Top Rated</option>
                <option className="bg-black">Lowest Rated</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-10">
            {products.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="group h-[85%] w-[22%] bg-[#ffffff0d] flex flex-col items-center justify-center rounded-4xl overflow-hidden hover:shadow-[0_0_4px_rgba(200,244,0,0.6)] hover:shadow-[#C8F400]"
                >
                  <div className="p-5 bg-white h-full w-full object-cover flex items-center justify-center ">
                    <div className="border h-50 w-50 overflow-hidden rounded-3xl transition-transform duration-500 group-hover:scale-110">
                      <img
                        className="h-full w-full object-cover"
                        src={elem.images}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 h-full w-full p-5">
                    <h3 className="text-[#ffffff51] text-[10px]">
                      {elem.title}
                    </h3>
                    <h1 className="text-white">{elem.category}</h1>
                    <h2 className="text-gray-200 text-[10px]">{elem.tags}</h2>
                    <div className="flex items-center justify-between border-t border-gray-200 py-3">
                      <h1 className="text-[#C8F400]">${elem.price}</h1>
                      <button className="bg-[#C8F400] cursor-pointer px-2 rounded-[10px] border text-black hover:text-[#86963c]">
                        <i class="ri-shopping-cart-2-line"></i> Add
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Extra />
    </div>
  );
};

export default Shop;
