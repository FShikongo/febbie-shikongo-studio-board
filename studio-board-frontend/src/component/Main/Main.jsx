import "./Main.scss";
import React from "react";

export default function Main() {
  return (
    <>
      <main className="main">
        <section className="hero">
          <div className="hero__content">
            <h1 className="hero__title">Welcome to Studio Board</h1>
            <p className="hero__subtitle">
              Your one-stop platform for jobs, events, and networking in the
              entertainment industry.
            </p>
            <button className="hero__cta-button">Get Started</button>
          </div>
        </section>

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
            renowned media companies and festivals, helping to create valuable
            job opportunities and foster meaningful networking experiences.
          </p>
          <div className="partner-showcase__logos">
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/Berlin-International-Art-FF.jpeg"
              alt="Berlin International Art Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Atlanta-FF.png"
              alt="Atlanta Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Netflix-logo.png"
              alt="Netflix"
            />
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/Niagara-Canada-International-FF.png"
              alt="Niagara Canada International Film Festival"
            />
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/cinema-production-logo.jpg"
              alt="Cinema Production"
            />
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/Whistler_film_festivals_logo.png"
              alt="Whistler Film Festials"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Warner-Bros-logo.png"
              alt="Warner Brothers"
            />
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/FF-Alliance.png"
              alt="Film Festival Allaince"
            />
            <img
              className="partner-showcase__logo"
              // src="../../assets/Logo/sony-pictures-logo.png"
              alt="Sony Pictures"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Sidewalk-FF-logo.png"
              alt="Sidewalk Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Disney+.png"
              alt="Disney Plus"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Paramount-Pictures-logo.png"
              alt="Paramount Pictures"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/tiff-logo.png"
              alt="Toronto Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/NashFilmRegLogo.jpg"
              alt="Nashville Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/oprah-winfrey-network-logo.jp"
              alt="Oprah Winfrey Network"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/LA-International-FF-logo.png"
              alt="LA International Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/sundance-film-festival-logo.jpg"
              alt="Sundance Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Tyler-Perry-Studios.jpg"
              alt="Tyler Perry Studios"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Niagara-Canada-International-FF.png"
              alt="Niagara Canada International Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Niagara-Canada-International-FF.png"
              alt="Niagara Canada International Film Festival"
            />
            <img
              className="partner-showcase__logo"
              src="../../assets/Logo/Niagara-Canada-International-FF.png"
              alt="Niagara Canada International Film Festival"
            />
          </div>
        </section>
      </main>
    </>
  );
}
