import { createContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export let Auth = createContext();

export let ContextProvider = ({ children }) => {
  let [toggle, setToggle] = useState(false);

  let [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("registerusers")) || [],
  );

  let [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loginuser") || null),
  );

  let [activePage, setActivePage] = useState("home");

  let [products, setProducts] = useState([]);

  let getdata = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <Auth.Provider
      value={{
        toggle,
        setToggle,
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        activePage,
        setActivePage,
        products,
        setProducts,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
