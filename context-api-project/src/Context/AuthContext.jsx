import { createContext, useState } from "react";

export let Auth = createContext();

export let ContextProvider = ({ children }) => {
  let [toggle, setToggle] = useState(false);
  let [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("regusers")) || [],
  );
  let [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("log user")),
  );

  return (
    <Auth.Provider
      value={{ toggle , setToggle , registeredUsers, setRegisteredUsers , setLoggedInUser }}
    >
      {children}
    </Auth.Provider>
  );
};
