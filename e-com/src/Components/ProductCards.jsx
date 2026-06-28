import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { product } from "../Context/ProductContext";

const ProductCards = ({ elem, quantity }) => {
  let navigate = useNavigate();
  let { setCartItems, data } = useContext(product);
  let { pathname } = useLocation();

  console.log(setCartItems);
  let addition = () => {
    setCartItems((prev) =>
      prev.map((items) =>
        items.id === elem.id
          ? { ...items, quantity: items.quantity + 1 }
          : items,
      ),
    );
  };

  let subtracte = () => {
    setCartItems((prev) =>
      prev
        .map((items) =>
          items.id === elem.id
            ? { ...items, quantity: items.quantity - 1 }
            : items,
        )
        .filter((items) => items.quantity > 0),
    );
  };

  return (
    <div>
      <div className="group bg-[#1a1a1a] flex flex-col rounded-3xl overflow-hidden hover:shadow-[0_0_15px_rgba(200,244,0,0.3)] transition-all duration-300 border border-[#ffffff1a] hover:border-[#C8F400]">
        <div className="p-6 bg-white h-64 flex items-center justify-center overflow-hidden">
          <img
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
            src={elem.image}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3 p-5 grow w-full">
          <span className="text-[#C8F400] text-[10px] uppercase tracking-widest font-bold">
            {elem.category}
          </span>

          <h3 className="text-white text-lg font-semibold line-clamp-1">
            {elem.title}
          </h3>

          <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
            {elem.description}
          </p>

          <button
            onClick={() => {
              navigate(`/pd/${elem.id}`);
            }}
            className="w-[50%] bg-[#C8F400] cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black hover:bg-[#b3da00] transition-colors flex items-center gap-2"
          >
            <i className="ri-shopping-cart-2-line"></i> VIEW DETAILS
          </button>

          <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#ffffff1a]">
            <h1 className="text-[#C8F400] text-xl font-bold">${elem.price}</h1>
            {pathname === "/C" ? (
              // <div className="bg-[#C8F400] cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black flex items-center gap-2">quantity : {elem.quantity}</div>
              <div className="bg-[#C8F400] cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black flex items-center gap-2">
                <button
                  onClick={addition}
                  className="text-center border border-[#ffffff] rounded-[5px] px-2 bg-[#C8F400] cursor-pointer active:scale-90 font-bold "
                >
                  +
                </button>{" "}
                {quantity}{" "}
                <button
                  onClick={subtracte}
                  className="text-center border border-[#ffffff] rounded-[5px] px-2 bg-[#C8F400] cursor-pointer active:scale-90 font-bold "
                >
                  -
                </button>
              </div>
            ) : quantity ? (
              <div className="bg-[#C8F400] cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black flex items-center gap-2">
                <button
                  onClick={addition}
                  className="text-center border border-[#ffffff] rounded-[5px] px-2 bg-[#C8F400] cursor-pointer active:scale-90 font-bold "
                >
                  +
                </button>{" "}
                {quantity}{" "}
                <button
                  onClick={subtracte}
                  className="text-center border border-[#ffffff] rounded-[5px] px-2 bg-[#C8F400] cursor-pointer active:scale-90 font-bold "
                >
                  -
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setCartItems((prev) => [...prev, { ...elem, quantity: 1 }]);
                  alert("this card is added");
                }}
                className="bg-[#C8F400] cursor-pointer px-4 py-2 rounded-xl text-sm font-bold text-black hover:bg-[#b3da00] transition-colors flex items-center gap-2"
              >
                ADD CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
