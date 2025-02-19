import { useState, useEffect } from "react";
import React from "react";
import "./Main.scss";

import biaff from "../../assets/Logo/Berlin-International-Art-FF.jpeg";
import atlantaff from "../../assets/Logo/Atlanta-FF.png";
import netflix from "../../assets/Logo/Netflix-logo.png";
import nciff from "../../assets/Logo/Niagara-Canada-International-FF.png";
import cinemap from "../../assets/Logo/cinema-production-logo.jpg";
import whistlerff from "../../assets/Logo/Whistler_film_festivals_logo.png";
import warnerbros from "../../assets/Logo/Warner-Bros-logo.png";
import ffa from "../../assets/Logo/FF-Alliance.png";
import sonyp from "../../assets/Logo/sony-pictures-logo.png";
import sidewalkff from "../../assets/Logo/Sidewalk-FF-logo.png";
import disneyp from "../../assets/Logo/Disney+.png";
import pp from "../../assets/Logo/Paramount-Pictures-logo.png";
import tiff from "../../assets/Logo/tiff-logo.png";
import nff from "../../assets/Logo/NashFilmRegLogo.jpg";
import own from "../../assets/Logo/oprah-winfrey-network-logo.jpg";
import laiff from "../../assets/Logo/LA-International-FF-logo.png";
import sff from "../../assets/Logo/sundance-film-festival-logo.jpg";
import tps from "../../assets/Logo/Tyler-Perry-Studios.jpg";

const heroVideos = [
  { id: "video1", video: "../../assets/Videos/Andrew-Garfield.gif" },
  { id: "video2", video: "../../assets/Videos/Dancing.gif" },
  { id: "video3", video: "../../assets/Videos/JCVDamme.gif" },
  { id: "video4", video: "../../assets/Videos/Dorothy-Dandridge-Vintage.gif" },
  { id: "video5", video: "../../assets/Videos/Cigarette-Travolta.gif" },
  { id: "video6", video: "../../assets/Videos/Dancing2.gif" },
  { id: "video7", video: "../../assets/Videos/Maestro.gif" },
];

const Hero = () => {
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
        {heroVideos.map((video, index) => (
          <video
            key={video.id}
            id={video.id}
            src={video.video}
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
};

export default function Main() {
  return (
    <main className="main">
      <Hero />
      <section className="features">
        <h2 className="features__title">Featured Opportunities</h2>
        <div className="features__list">
          <div className="features__card">
            <div className="features__card-image">
              <h3 className="features__card-title">Job Opportunity 1</h3>
            </div>
            <div className="features__card-text">
              <p className="features__card-description">
                Join a dynamic team in the film industry. Apply now for an
                exciting role!
              </p>
            </div>
          </div>

          <div className="features__card">
            <div className="features__card-image">
              <h3 className="features__card-title">Job Opportunity 2</h3>
            </div>
            <div className="features__card-text">
              <p className="features__card-description">
                Explore opportunities with top production companies.
              </p>
            </div>
          </div>

          <div className="features__card">
            <div className="features__card-image">
              <h3 className="features__card-title">Film Festival</h3>
            </div>
            <div className="features__card-text">
              <p className="features__card-description">
                Attend the biggest film festival of the year and network with
                industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-showcase">
        <h2 className="partner-showcase__title">Our Partners</h2>
        <p className="partner-showcase__text">
          Studio Board is honored to collaborate with some of the world’s most
          renowned media companies and festivals, helping to create valuable job
          opportunities and foster meaningful networking experiences.
        </p>
        <div className="partner-showcase__logos">
          <img
            className="partner-showcase__logo"
            src={biaff}
            alt="Berlin International Art Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={atlantaff}
            alt="Atlanta Film Festival"
          />
          <img className="partner-showcase__logo" src={netflix} alt="Netflix" />
          <img
            className="partner-showcase__logo"
            src={nciff}
            alt="Niagara Canada International Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={cinemap}
            alt="Cinema Production"
          />
          <img
            className="partner-showcase__logo"
            src={whistlerff}
            alt="Whistler Film Festials"
          />
          <img
            className="partner-showcase__logo"
            src={warnerbros}
            alt="Warner Brothers"
          />
          <img
            className="partner-showcase__logo"
            src={ffa}
            alt="Film Festival Allaince"
          />
          <img
            className="partner-showcase__logo"
            src={sonyp}
            alt="Sony Pictures"
          />
          <img
            className="partner-showcase__logo"
            src={sidewalkff}
            alt="Sidewalk Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={disneyp}
            alt="Disney Plus"
          />
          <img
            className="partner-showcase__logo"
            src={pp}
            alt="Paramount Pictures"
          />
          <img
            className="partner-showcase__logo"
            src={tiff}
            alt="Toronto International Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={nff}
            alt="Nashville Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={own}
            alt="Oprah Winfrey Network"
          />
          <img
            className="partner-showcase__logo"
            src={laiff}
            alt="LA International Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={sff}
            alt="Sundance Film Festival"
          />
          <img
            className="partner-showcase__logo"
            src={tps}
            alt="Tyler Perry Studios"
          />
          <img
            className="partner-showcase__logo"
            src={nciff}
            alt="Niagara Canada International Film Festival"
          />
        </div>
      </section>
    </main>
  );
}
