import React, { useContext } from "react";
import Navbar from "./componenets/Navbar";
import Home from "./componenets/Home";
import Shop from "./componenets/Shop";
import About from "./componenets/About";
import Extra from "./componenets/Extra";
import Login from "./componenets/Login";
import Resgister from "./componenets/Resgister";
import { Auth } from "./contextapi/Context";

const App = () => {
  let { toggle, loggedInUser, activePage } = useContext(Auth);

  if (loggedInUser) {
    return (
      <div className="flex flex-col h-full relative">
        <>
          <Navbar />
          <main className="">
            {activePage === "home" && <Home />}
            {activePage === "shop" && <Shop />}
            {activePage === "about" && <About />}
            {activePage !== "home" &&
              activePage !== "shop" &&
              activePage !== "about" && <Home />}
          </main>
        </>
      </div>
    );
  }
  return (
    <div className="flex flex-col h-full relative">
      {toggle ? <Resgister /> : <Login />}
    </div>
  );
};

export default App;
