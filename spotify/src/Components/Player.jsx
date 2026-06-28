import React, { useContext, useEffect, useRef } from "react";
import { Music } from "../Context/SongContextProvider";

const Player = () => {
  let { song, setIsPlaying, isPlaying } = useContext(Music);

  let audioRef = useRef();

  useEffect(() => {
    audioRef.current?.play();
  }, [song]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="left-[50%] bottom-[1%] right-[50%] fixed  text-center  backdrop-blur-md flex items-center justify-center">
      <button
        onClick={() => {
          setIsPlaying((prev) => !prev);
        }}
        className='backdrop-blur-md text-center  cursor-pointer text-8xl text-white rounded-[100%] px-1 py-1 font-bol hover:text-gray-500 transition-colors hover:bg-[#C8F400]'
      >
        {isPlaying ? (
          <i class="ri-pause-circle-line"></i>
        ) : (
          <i class="ri-play-circle-line"></i>
        )}
      </button>
      <audio ref={audioRef} src={song?.url}></audio>
    </div>
  );
};

export default Player;
