import React from "react";
import "./HeroFeatures.scss";

import feature1 from "../../assets/Features/feature1.jpg";
import feature2 from "../../assets/Features/feature2.jpg";
import feature3 from "../../assets/Features/feature3.jpg";
import feature4 from "../../assets/Features/feature4.jpg";

const HeroFeatures = () => {
  const features = [
    {
      image: feature1,
      title: "Exclusive Film Workshops",
      description: "Learn from industry experts in exclusive masterclasses.",
    },
    {
      image: feature2,
      title: "Networking Sessions",
      description: "Connect with filmmakers, producers, and industry leaders.",
    },
    {
      image: feature3,
      title: "Casting Calls",
      description: "Discover casting opportunities for upcoming productions.",
    },
    {
      image: feature4,
      title: "Behind-the-Scenes Access",
      description: "Get exclusive insights into film productions and sets.",
    },
  ];

  return (
    <section className="hero-features">
      <h2 className="hero-features__title">Featured Opportunities</h2>
      <div className="hero-features__list">
        {features.map((feature, index) => (
          <div key={index} className="hero-features__item">
            <div
              className="hero-features__image"
              style={{ backgroundImage: `url(${feature.image})` }}
            ></div>
            <div className="hero-features__text">
              <h3 className="hero-features__title">{feature.title}</h3>
              <p className="hero-features__description">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroFeatures;
