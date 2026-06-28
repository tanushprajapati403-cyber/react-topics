import React, { useEffect, useState } from "react";
import axios from "axios";
import Abouts from "./components/Abouts";
import Homes from "./components/Homes";

function App() {
  const [toggle, setToggle] = useState(false);
  const [products, setProducts] = useState([]);

  let getData = async () => {
    try {
      let res = await axios.get("https://dummyjson.com/products");
      console.log(res.data.products);
      setProducts(res.data.products);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
  getData();
  }, []);

  return (
    <div>
      <h1>App</h1>
      <button onClick={() => setToggle((prev) => !prev)}>change</button>
     
      {toggle ? <Abouts /> : <Homes  />}
      {products.map((elem, index) => {
        return <h1 key={index}>{elem.title}</h1>;
      })}
    </div>
  );
}

export default App;
