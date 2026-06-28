import React, { useContext } from "react";
import { counter } from "./context/Context";

function App() {
  let { count, setCount } = useContext(counter);

  return (
    <div>
      <h1>App count - {count}</h1>
      <button
       onClick={()=>{
        setCount((prev)=>prev +1)
       }}
      >
        increment
      </button>
    </div>
  );
}

export default App;
