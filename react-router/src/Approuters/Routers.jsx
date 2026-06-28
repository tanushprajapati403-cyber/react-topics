import React from "react";
import { NavLink, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Nestage from "../pages/Nestage";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}>
          <Route path="nestage" element={<Nestage />}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/pd/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
};

export default Routers;
