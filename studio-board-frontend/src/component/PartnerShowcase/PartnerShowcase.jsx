import React, { useEffect, useRef, useState } from "react";
import "./PartnerShowcase.scss";

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
import laiff from "../../assets/Logo/LA-International-FF-logo.png";
import sff from "../../assets/Logo/sundance-film-festival-logo.jpg";
import tps from "../../assets/Logo/Tyler-Perry-Studios.jpg";
import abff from "../../assets/Logo/ABFF.png";

const logos = [
  abff,
  biaff,
  atlantaff,
  netflix,
  nciff,
  cinemap,
  whistlerff,
  warnerbros,
  ffa,
  sonyp,
  sidewalkff,
  disneyp,
  pp,
  tiff,
  nff,
  laiff,
  sff,
  tps,
];

export default function PartnerShowcase() {
  return (
    <section className="partner-showcase">
      <h2 className="partner-showcase__title">Our Partners</h2>
      <p className="partner-showcase__text">
        Studio Board is honored to collaborate with some of the world's most
        renowned media companies and festivals, helping to create valuable job
        opportunities and foster meaningful networking experiences.
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
