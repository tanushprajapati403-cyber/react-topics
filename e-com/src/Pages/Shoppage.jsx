import React from "react";
import { useContext } from "react";
import { product } from "../Context/ProductContext";
import axios from "axios";
import { useEffect } from "react";
import ProductCards from "../Components/ProductCards";

const Shoppage = () => {
  let { products, setProducts , cartItems } = useContext(product);

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <div className="h-full p-4 grid grid-cols-4 gap-5">

    {
        products.map((elem)=>{
          let IsInCart = cartItems.find((val)=>val.id === elem.id);
            return <ProductCards elem={elem} key={elem.id} quantity={IsInCart?.quantity}/>
        })
    }
  </div>;
};

export default Shoppage;
