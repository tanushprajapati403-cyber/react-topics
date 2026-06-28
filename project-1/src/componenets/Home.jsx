import React from "react";
import Extra from "./Extra";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col h-full px-37 pt-24 py-5">
        <div className=" h-full flex flex-col gap-10">
          <div className="h-[60%] flex flex-row items-center justify-center border-white rounded-4xl border ">
            <div className=" h-full w-[80%] px-12 py-12 gap-2 flex flex-col">
              <h1 className="text-[14px] text-[#C8F400]">GOOD AFTERNOON</h1>
              <h1 className="text-[48px] text-white">
                WELCOME BACK,
                <br />
                <span className="text-[#C8F400] text-volt">tanush!</span>
              </h1>
              <h2 className="text-[16px] text-gray-400">
                Discover today's picks -- hand-curated products across
                <br />
                electronics, fashon, and more.
              </h2>
              <div className="flex gap-5">
                <button className="text-[14px] px-5 py-2 rounded-[15px] bg-[#c7f400]">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
                <button className="text-[14px] px-5 py-2 rounded-[15px]  border border-gray-200 text-gray-200">
                  View All Products
                </button>
              </div>
            </div>
            <div className="text-white h-full w-[20%] flex flex-col gap-5 items-center justify-center">
              <div className="text-[12px] text-center bg-[#c7f40052] px-5 py-3 rounded-[15px]  border border-gray-200 text-gray-200 ">
                <span className="text-[36px] font-bold text-[#C8F400]">
                  20+
                </span>
                <br />
                Product Available
              </div>
              <div className="text-[12px] text-center px-5 py-3 rounded-[15px]  border border-gray-200 text-gray-200">
                <span className="text-[36px] font-bold">Free</span>
                <br />
                Delivery on $999+
              </div>
            </div>
          </div>
          <div className="h-[20%] flex gap-5">
            <div className="h-full w-[25%] border-gray-300 border rounded-4xl flex items-center justify-center gap-4 py-5">
              <div className=" px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-3xl">
                <i className="ri-box-3-fill"></i>
              </div>
              <div>
                <h1 className="text-gray-200 text-2xl font-bold">0</h1>
                <h2 className="text-gray-300">Cart Items</h2>
                <h2 className="text-gray-400">In your bag</h2>
              </div>
            </div>
            <div className="h-full w-[25%] border-gray-300 border rounded-4xl flex items-center justify-center gap-4 py-5">
              <div className=" px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-3xl">
                <i className="ri-arrow-up-double-line"></i>
              </div>
              <div>
                <h1 className="text-gray-200 text-2xl font-bold">$0.00</h1>
                <h2 className="text-gray-300">Cart Value</h2>
                <h2 className="text-gray-400">Ready to checkout</h2>
              </div>
            </div>
            <div className="h-full w-[25%] border-gray-300 border rounded-4xl flex items-center justify-center gap-4 py-5">
              <div className=" px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-3xl">
                <i class="ri-star-line"></i>
              </div>
              <div>
                <h1 className="text-gray-200 text-2xl font-bold">5</h1>
                <h2 className="text-gray-300">Top Product</h2>
                <h2 className="text-gray-400">Highly rated</h2>
              </div>
            </div>
            <div className="h-full w-[25%] border-gray-300 border rounded-4xl flex items-center justify-center gap-4 py-5">
              <div className=" px-2 py-1 rounded-[10px] bg-[#C8F400] text-black text-3xl">
                <i class="ri-price-tag-3-line"></i>
              </div>
              <div>
                <h1 className="text-gray-200 text-2xl font-bold">6</h1>
                <h2 className="text-gray-300">Categories</h2>
                <h2 className="text-gray-400">To explore</h2>
              </div>
            </div>
          </div>
          <div className="h-[10%] flex items-center justify-between">
            <h1 className="text-[25px] text-white">Shop by category</h1>
            <button className=" text-[#C8F400]">
              View All <i class="ri-arrow-right-line"></i>
            </button>
          </div>
          <div className="flex flex-wrap h-[20%] gap-8">
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">💻</h1>
              <h2 className="text-black">Electronics</h2>
              <h3 className="text-gray-500">17 items</h3>
            </div>
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">📦</h1>
              <h2 className="text-black">Clothing</h2>
              <h3 className="text-gray-500">2 items</h3>
            </div>
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">📦</h1>
              <h2 className="text-black">Furniture</h2>
              <h3 className="text-gray-500">3 items</h3>
            </div>
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">📦</h1>
              <h2 className="text-black">Home</h2>
              <h3 className="text-gray-500">14 items</h3>
            </div>
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">📦</h1>
              <h2 className="text-black">Sports</h2>
              <h3 className="text-gray-500">8 items</h3>
            </div>
            <div className="h-full w-[23%] border-gray-300 border rounded-3xl flex flex-col items-center justify-center gap-1 bg-white py-5 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <h1 className="text-3xl">📦</h1>
              <h2 className="text-black">Accessories</h2>
              <h3 className="text-gray-500">6 items</h3>
            </div>
          </div>
          <div className=" h-full flex gap-3">
            <div className="h-full w-[50%] bg-white rounded-2xl  px-5 py-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h1 className="text-[18px]">
                  <span className="text-yellow-500">
                    <i class="ri-star-fill"></i>
                  </span>
                  Top Rated
                </h1>
                <button className="text-[#c7f40075] hover:text-[#C8F400]">
                  See all <i class="ri-arrow-right-line"></i>
                </button>
              </div>
              <div className="gap-3 flex flex-col">
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$599.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$199.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$349.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i class="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$49.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i class="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$149.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[50%] bg-white rounded-2xl px-5 py-5 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h1 className="text-[18px]">
                  <span className="text-[#C8F400]">
                    <i class="ri-flashlight-fill"></i>
                  </span>
                  New Arrivels
                </h1>
                <button className="text-[#c7f40075] hover:text-[#C8F400]">
                  See all <i className="ri-arrow-right-line"></i>
                </button>
              </div>
              <div className="gap-3 flex flex-col">
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$99.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$299.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$24.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex  gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$199.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i className="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-between border-gray-300 border rounded-2xl px-5 py-5">
                  <div className="flex gap-4">
                    <div className="border h-10 w-10 overflow-hidden rounded-md">
                      <img
                        className="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/9252037/pexels-photo-9252037.png"
                        alt=""
                      />
                    </div>
                    <h1 className="text-center text-[#C8F400]">$34.99</h1>
                  </div>
                  <div>
                    <button className="text-[#c7f40082] hover:text-[#C8F400] text-xl bg-[#c7f40033] px-1.5 py-0.5 rounded-xl">
                      <i class="ri-shopping-bag-4-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[20%] w-full flex gap-15">
            <div className="h-full border flex items-center justify-start  rounded-2xl w-[30%] px-5 py-3 text-white gap-3 ">
              <h1 className="text-[#C8F400] text-3xl">
                <i className="ri-flashlight-fill"></i>
              </h1>
              <h1 className="text-gray-400 text-[13px]">
                <span className="text-[15px] text-white">Fast Delivery</span>
                <br />
                same-day on select items
              </h1>
            </div>
            <div className="h-full border flex items-center rounded-2xl w-[30%] px-5 py-3  text-white gap-3 ">
              <h1 className="text-blue-300 text-3xl">
                <i className="ri-shield-line"></i>
              </h1>
              <h1 className="text-gray-400 text-[13px]">
                <span className="text-[15px] text-white">Secure Payments</span>
                <br />
                100% encrypted checkout
              </h1>
            </div>
            <div className="h-full border flex items-center rounded-2xl w-[30%] px-5 py-3  text-white gap-3">
              <h1 className="text-green-400 text-3xl">
                <i className="ri-price-tag-3-line"></i>
              </h1>
              <h1 className="text-gray-400 text-[13px]">
                <span className="text-[15px] text-white">Best Prices</span>
                <br />
                Price-match guarantee
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Extra />
    </div>
  );
};

export default Home;
