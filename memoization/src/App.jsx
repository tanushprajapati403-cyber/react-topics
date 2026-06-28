import React, { useCallback, useMemo, useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";

const App = () => {
  let [count, setCount] = useState(0);

  let [toogle, setToogle] = useState(false);

  console.log("aap rendering.....");

  // ye sirf ek baar chale like as useeffect.
  // let incrementCount = useCallback(()=>{
  //   setCount(count+1);
  // },[]);




  // ye sirf count ke aane pe chale ga like as useeffect.
  let incrementCount = useCallback(()=>{
    setCount(count+1);
  },[count]);




  // ye togglr true false pe increment chala dega jess se count ke value  badh jayegi phele ek bar value badegi pher render-toogle button pe click hone per true  ho 
  // jaye ge value phr chalega ya app ke value 1 se 2 ho jaye gi.
  // let incrementCount = useCallback(() => {
  //   setCount(count + 1);
  // }, [toogle]);



  // loop lag hoga ye ess ke liye usememo ka use hoga jess se bo value store ker lega jess function ek store hoga calc me direct value nikaloge aap ess se call nahi 
  // ker na padega ess
  // let calc = () => {
  //   let sum = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // };
  // let ans = calc();
  // console.log(ans);
  // abb dekhate hai kesse roke ess lag hone se or time delay se :
  // not lage :
  // let calc = useMemo(() => {
  //   let sum = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // },[]);
  // console.log(calc);
  

  return (
    <div>
      <h1>App - {count}</h1>
      <button onClick={incrementCount}>add+1</button>
      <h1>toogle - {toogle ? 1 : 0}</h1>
      <button onClick={() => setToogle((prev) => !prev)}>re - render</button>
      <Home />
      <About incrementCount={incrementCount} />
    </div>
  );
};

export default App;
