import React, { useContext } from "react";
import { product } from "../Context/ProductContext";
import ProductCards from "../Components/ProductCards";

const Cartpage = () => {
  let { cartItems} = useContext(product);
  return (
    <>
    <h1 className="text-[#C8F400] text-[50px] uppercase tracking-widest font-bold text-center">CART</h1>
    <div className="grid grid-cols-4 h-auto px-5  gap-10">
      {cartItems.map((elem) => {
        return <ProductCards key={elem.id} elem={elem} quantity={elem.quantity}/>
      })}
    </div>
    </>
  );
};

export default Cartpage;
