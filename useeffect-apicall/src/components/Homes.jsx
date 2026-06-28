import React, { useState } from "react";

const Homes = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Homes-{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default Homes;
