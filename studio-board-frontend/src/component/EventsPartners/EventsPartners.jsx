import React from "react";
import "./EventsPartners.scss";

import biaff from "../../assets/Logo/Berlin-International-Art-FF.jpeg";
import atlantaff from "../../assets/Logo/Atlanta-FF.png";
import nciff from "../../assets/Logo/Niagara-Canada-International-FF.png";
import whistlerff from "../../assets/Logo/Whistler_film_festivals_logo.png";
import ffa from "../../assets/Logo/FF-Alliance.png";
import sidewalkff from "../../assets/Logo/Sidewalk-FF-logo.png";
import tiff from "../../assets/Logo/tiff-logo.png";
import nff from "../../assets/Logo/NashFilmRegLogo.jpg";
import laiff from "../../assets/Logo/LA-International-FF-logo.png";
import sff from "../../assets/Logo/sundance-film-festival-logo.jpg";

const logos = [
  biaff,
  atlantaff,
  nciff,
  whistlerff,
  ffa,
  sidewalkff,
  tiff,
  nff,
  laiff,
  sff,
];

export default function PartnerShowcase() {
  return (
    <section className="partner-showcase">
      <h2 className="partner-showcase__title">Our Event Partners</h2>
      <p className="partner-showcase__text">
        Studio Board is honored to collaborate with some of the world's most
        renowned media companies and festivals, helping to create valuable
        events and foster meaningful networking experiences.
      </p>
      <div className="partner-showcase__logos-container">
        <div className="partner-showcase__logos">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              className="partner-showcase__logo"
              src={logo}
              alt="Partner Logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
