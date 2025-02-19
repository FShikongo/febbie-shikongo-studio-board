import React from "react";
import "./Main.scss";

import Hero from "../Hero/Hero";
import Features from "../Features/Features";
import PartnerShowcase from "../PartnerShowcase/PartnerShowcase";

export default function Main() {
  return (
    <>
      <main className="main">
        <Hero />
        <Features />
        <PartnerShowcase />
      </main>
    </>
  );
}
