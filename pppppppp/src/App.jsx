import React from "react";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import Form from "./Components/Form";
import ProductCard from "./Components/ProductCard";

function App() {
  let [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen p-4">
      <Navbar settoggle={setToggle}/>
      <div className=" h-[90%] px-12 py-4 rounded-3xl">
        {toggle ? (
          <div className="h-full flex items-center justify-center mt-10">
            <Form/>
          </div>
        ) : (
          <div className="h-full flex flex-wrap p-5 gap-25">
            <ProductCard/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
