import React from "react";
import Navbar from "./Components/Navbar";
import MusicCard from "./Components/MusicCard";
import Player from "./Components/Player";
import Home from "./Components/Home";
import Router from "./NavRouter/Router";

const App = () => {
 


  return (
    <div className="bg-black h-full w-full flex flex-col">
      <Navbar />
      <Router/>
        {/* <Home />  */}
     
      {/* <div>
       <div className='px-5 py-35 flex flex-wrap h-full  w-full gap-14'>
        {iSongs.map((elem)=>{
          return <MusicCard key={elem.id} gana={elem}/>
        })}
       </div>
       <Player/>  
      </div> */}
    </div>
  );
};

export default App;
