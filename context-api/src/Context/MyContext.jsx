import { createContext } from "react";

export let Mystore = createContext();

let greet = "hello";

export let ContextProvider = ({children})=>{
return <Mystore.Provider value={greet}>{children}</Mystore.Provider>
}