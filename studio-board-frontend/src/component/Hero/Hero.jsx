import React, { useState, useEffect } from "react";
import "./Hero.scss";

import dancing from "../../assets/Gif/Dancing.gif";
import damme from "../../assets/Gif/JCVDamme.gif";
import dandbridge from "../../assets/Gif/Dorothy-Dandridge-Vintage.gif";
import travolta from "../../assets/Gif/Cigarette-Travolta.gif";
import dancing2 from "../../assets/Gif/Dancing2.gif";
import maestro from "../../assets/Gif/Maestro.gif";
import smiling from "../../assets/Gif/Smiling.gif";

const heroVideos = [
  { id: "video1", video: smiling },
  { id: "video2", video: dancing },
  { id: "video3", video: damme },
  { id: "video4", video: dandbridge },
  { id: "video5", video: travolta },
  { id: "video6", video: dancing2 },
  { id: "video7", video: maestro },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroVideos.length);
    }, 5000);

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
        <h1 className="hero__title">Welcome to Studio Board</h1>
        <p className="hero__subtitle">
          Your one-stop platform for jobs, events, and networking in the
          entertainment industry.
        </p>
        <a href="/jobboard">
          <button className="hero__cta-button">Get Started</button>
        </a>
      </div>
    </section>
  );
}
