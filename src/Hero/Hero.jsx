import React from "react";
import pause_icon from "/src/assets/pause_icon.png";
import play_icon from "/src/assets/play_icon.png";

function Hero({ playStatus, setPlayStatus }) {
  return (
    <div className="flex justify-start  text-white">
      <div className="ml-52 mt-24 font-mono rounded-full">
        <p className="text-6xl">Dive into</p>
        <p className="text-6xl">what you love</p>
        <button
          className="mt-2 "
          onClick={() => {
            setPlayStatus(!playStatus);
          }}
        >
          {playStatus ? (
            <div className="flex items-center gap-3">
             <img src={pause_icon} className="h-[40px]" alt="" /> See the video
            </div>
          ) : (
            <div className="flex items-center gap-3">
            <img src={play_icon} className="h-[40px]" alt="" /> See the video
          </div>
          )}
        </button>
      </div>
    </div>
  );
}

export default Hero;
