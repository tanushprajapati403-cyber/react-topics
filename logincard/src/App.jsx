import React, { useState } from "react";
import First from "./pages/First";
import Second from "./pages/Second";

function App() {

  let [data , setData] = useState(true);
  
  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-300">
      {data ? <First setData={setData} /> : <Second  setData={setData} />}
    </div>
  );
}

export default App;
