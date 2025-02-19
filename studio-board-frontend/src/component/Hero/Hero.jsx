import React, { useState, useEffect } from "react";
import "./Hero.scss";

import garfield from "../../assets/Gif/Andrew-Garfield.gif";
import dancing from "../../assets/Gif/Dancing.gif";
import damme from "../../assets/Gif/JCVDamme.gif";
import dandbridge from "../../assets/Gif/Dorothy-Dandridge-Vintage.gif";
import travolta from "../../assets/Gif/Cigarette-Travolta.gif";
import dancing2 from "../../assets/Gif/Dancing2.gif";
import maestro from "../../assets/Gif/Maestro.gif";

const heroVideos = [
  { id: "video1", video: garfield },
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
    }, 5000); // Change video every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero__background">
        {heroVideos.map((gif, index) => (
          <video
            key={gif.id}
            id={gif.id}
            src={gif.video} // Fix: Access video correctly
            className={`hero__video ${index === currentIndex ? "active" : ""}`}
            autoPlay
            loop
            muted
          />
        ))}
      </div>
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Studio Board</h1>
        <p className="hero__subtitle">
          Your one-stop platform for jobs, events, and networking in the
          entertainment industry.
        </p>
        <button className="hero__cta-button">Get Started</button>
      </div>
    </section>
  );
}
