import { createContext, useState } from "react";

export let product = createContext();

export let ContextProvider = ({ children }) => {
  let [products, setProducts] = useState([]);
  let [data, setData] = useState({});
  

  return (
    <product.Provider value={{ products, setProducts, data, setData }}>
      {children}
    </product.Provider>
  );
};
