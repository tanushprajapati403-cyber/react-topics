import React, { useContext } from "react";
import { Music } from "../Context/SongContextProvider";
import { SongData } from "../Context/SongData";
import Player from "./Player";

const MusicCard = () => {
  let { setSong, song, setIsPlaying } = useContext(Music);
  let {iSongs} = useContext(SongData);

  return (
       <div>
       <div className='px-5 py-35 flex flex-wrap h-full  w-full gap-14'>
        {iSongs.map((gana)=>{ 
          return <div className="group w-full h-24 bg-[#ffffff0d] flex items-center justify-between px-6 mb-3 rounded-2xl overflow-hidden hover:shadow-[0_0_10px_#C8F400] transition-all border border-transparent hover:border-[#C8F400]/30 shrink-0">
      <div className="flex items-center gap-5 w-1/3">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={gana.thumbnail}
            alt={gana.title}
          />
        </div>
        <h3 className="text-[18px] font-semibold text-[#C8F400]">
          {gana.title}
        </h3>
      </div>

      <div className="flex flex-1 items-center justify-around px-10 border-l border-gray-700/50">
        <div className="text-center w-40">
          <h1 className="text-white text-[10px] font-medium ">{gana.artist}</h1>
          <h2 className="text-gray-400 text-[10px]">{gana.album}</h2>
        </div>
        <h1 className="text-[#C8F400] font-mono text-sm">
          { gana.year || "2024" }
        </h1>
      </div>

      <div className="flex items-center border-l border-gray-700/50 pl-10">
        <button
          onClick={() => {
            setSong(gana);
            setIsPlaying(true);
          }}
          className="bg-[#C8F400] cursor-pointer px-2 py-1.5 text-3xl text-white rounded-4xl font-bol hover:bg-gray-500 transition-colors  uppercase tracking-widest hover:text-[#C8F400]"
        >
          {song?.id === gana.id ? (
            <i class="ri-pause-circle-line"></i>
          ) : (
            <i class="ri-play-circle-line"></i>
          )}
        </button>
      </div>
    </div>
        })}
       </div>
       <Player/>  
      </div>
   
  );
};

export default MusicCard;

 