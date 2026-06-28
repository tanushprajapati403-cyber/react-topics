import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import ProductCard from "./Components/ProductCard";

function App() {
  let [toggle, Settoggle] = useState(false);


  return (
    <div className="h-screen p-4">
      <Navbar Settoggle={Settoggle} />
      <div className=" h-[90%] px-12 py-4 shadow-xl border border-gray-500 rounded-3xl">
        {toggle ? (
          <div className="h-full flex items-center justify-center">
            <Form />
          </div>
        ) : (
          <div className="h-full flex flex-wrap gap-4">
            <ProductCard />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
