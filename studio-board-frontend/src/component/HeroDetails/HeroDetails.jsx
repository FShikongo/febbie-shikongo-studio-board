import React, { useState, useEffect } from "react";
import "./HeroDetails.scss";

import bts from "../../assets/Gif/bts.gif";
import makeup from "../../assets/Gif/hair-makeup.gif";
import cannesff from "../../assets/Gif/festival-de-cannes.gif";

const feature = [
  { id: "video1", video: bts },
  { id: "video2", video: makeup },
  { id: "video3", video: cannesff },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroVideos[currentIndex].video})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">Studio Board</h1>
        <p className="hero__subtitle">
          Your one-stop platform for jobs, events, and networking in the
          entertainment industry.
        </p>
        {/* <button className="hero__cta-button">Get Started</button> */}
      </div>
    </section>
  );
}
