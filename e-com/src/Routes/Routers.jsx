import React from "react";
import { Routes, Route } from "react-router";
import Homepage from "../Pages/Homepage";
import Shoppage from "../Pages/Shoppage";
import Cartpage from "../Pages/Cartpage";
import ProductDetails from "../Pages/ProductDetails";
import Authpage from "../Pages/authpage";
import ProtectedRoute from "../Components/ProtectedRoute";
import PublicRoute from "../Components/PublicRoute";

const Routers = () => {
  return (
    <div>
      <Routes>

        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<Authpage />}></Route>
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/H" element={<Homepage />}></Route>
          <Route path="/S" element={<Shoppage />}></Route>
          <Route path="/C" element={<Cartpage />}></Route>
        </Route>

        <Route path="/pd/:id" element={<ProductDetails />}></Route>
        
      </Routes>
    </div>
  );
};

export default Routers;
