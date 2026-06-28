import { createContext , useState } from "react";

export let counter = createContext();

export let ContextProvider = ({children})=>{
 
    let [count , setCount] = useState(0);

    return <counter.Provider value={{count,setCount}}>{children}</counter.Provider>
}