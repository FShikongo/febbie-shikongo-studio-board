import React from "react";
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
import own from "../../assets/Logo/oprah-winfrey-network-logo.jpg";
import laiff from "../../assets/Logo/LA-International-FF-logo.png";
import sff from "../../assets/Logo/sundance-film-festival-logo.jpg";
import tps from "../../assets/Logo/Tyler-Perry-Studios.jpg";

export default function PartnerShowcase() {
  return (
    <section className="partner-showcase">
      <h2 className="partner-showcase__title">Our Partners</h2>
      <p className="partner-showcase__text">
        Studio Board is honored to collaborate with some of the world's most
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
  );
}
