import { useState, useEffect } from "react";
import React from "react";
import "./Features.scss";

import bts from "../../assets/Gif/bts.gif";
import makeup from "../../assets/Gif/hair-makeup2.gif";
import cannesff from "../../assets/Gif/festival-de-cannes.gif";

const featureVideos = [
  { id: "feature1", img: bts },
  { id: "feature2", img: makeup },
  { id: "feature3", img: cannesff },
];

export default function Features() {
  return (
    <main className="main">
      <section className="features">
        <h2 className="features__title">Featured Opportunities</h2>
        <div className="features__list">
          {featureVideos.map((feature) => (
            <div key={feature.id} className="features__card">
              <div className="features__card-image">
                <img
                  src={feature.img}
                  alt={feature.id}
                  className="feature-gif"
                />
                <h3 className="features__card-title">
                  {feature.id === "feature1"
                    ? "Crew Call Short Film"
                    : feature.id === "feature2"
                    ? "Hair and Makeup"
                    : "Film Festival"}
                </h3>
              </div>
              <div className="features__card-text">
                <p className="features__card-description">
                  {feature.id === "feature1"
                    ? "Join a dynamic team in the film industry. Apply now for an exciting role!"
                    : feature.id === "feature2"
                    ? "Designs and styles of hair and make-up looks for all the characters."
                    : "Attend the biggest film festival of the year and network with industry leaders."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
