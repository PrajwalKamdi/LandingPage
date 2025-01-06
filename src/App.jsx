import React, { useEffect, useState } from "react";
import Header from "./Header/Header.jsx";
import Background from "./Background/Background.jsx";
import Hero from "./Hero/Hero.jsx";

function App() {
  const [count, setCount] = useState(1);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
      setInterval(() => {
        if (count == 3) {
          setCount(1);
        } else {
          setCount(count + 1);
        }
      }, 3000);
    });
  return (
    <div className="relative h-screen">
      <Background
        count={count}
        setCount={setCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />
      <Header />
      <Hero playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </div>
  );
}

export default App;
