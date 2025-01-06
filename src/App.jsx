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
    }, 10000);
  });
  return (
    <div className="relative h-screen">
      <Background count={count} playStatus={playStatus} />
      <Header />
      <Hero playStatus={playStatus} setPlayStatus={setPlayStatus} />
    </div>
  );
}

export default App;
