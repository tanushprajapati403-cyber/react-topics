import React, { useRef } from "react";

const App = () => {
  console.log("app render.....");
  //  useref is aceesing of DoM , useref never a rerender.
  let audio = useRef({});



  let inp = useRef({});
  console.log(inp);

  let submits = () => {
    console.log(inp.current.name.value);
    console.log(inp.current.email.value);
  };

  
  return (
    <div>
      <h2
        onClick={(e) => {
          e.console.log(e.nativeEvent);
        }}
      >
        hello
      </h2>

      <audio ref={audio} src="song.mp3"></audio>
      <button onClick={() => audio.current.play()}>play</button>
      <button onClick={() => audio.current.pause()}>stop</button>
      <button onClick={() => (audio.current.currentTime = 0)}>reset</button>

      <br />
      <br />
      <br />
      <br />
      <br />

      <input
        ref={(e) => {
          inp.current.name = e;
        }}
        type="text"
        placeholder="Enter Name"
      />
      <input
        ref={(e) => {
          inp.current.email = e;
        }}
        type="text"
        placeholder="Enter email"
      />
      <button onClick={submits}>console on show</button>
    </div>
  );
};

export default App;
