import { useState } from "react";
import { createContext } from "react";

export let product = createContext();

export let ContextProvider = ({children})=>{
   let [products , setProducts] = useState([]);
   let [data, setData] = useState({});
   const [cartItems , setCartItems] = useState([]);

    return  <product.Provider value={{products , setProducts , data , setData , cartItems , setCartItems }}>{children}</product.Provider>
}