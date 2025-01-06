import React from "react";
import image1 from "/src/assets/image1.png";
import image2 from "/src/assets/image2.png";
import image3 from "/src/assets/image3.png";
import video1 from "/src/assets/video1.mp4";

function Background({ count, playStatus }) {
  if (playStatus) {
    return (
      <div className="absolute -z-10 w-full">
        <video src={video1} autoPlay loop height="100%" width="100%"></video>
      </div>
    );
  }
  if (count == 1) {
    return (
      <div className="absolute -z-10 w-full">
        <img src={image1} alt="" className="w-full h-screen object-cover" />
      </div>
    );
  }
  if (count == 2) {
    return (
      <div className="absolute -z-10 w-full">
        <img src={image2} alt="" className="w-full h-screen object-cover" />
      </div>
    );
  }
  if (count == 3) {
    return (
      <div className="absolute -z-10 w-full">
        <img src={image3} alt="" className="w-full  h-screen object-cover" />
      </div>
    );
  }
  return <div className="absolute -z-10 bg-slate-800 "></div>;
}

export default Background;
