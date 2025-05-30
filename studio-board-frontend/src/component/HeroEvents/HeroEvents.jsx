import React from "react";
import "./HeroEvents.scss";

import event1 from "../../assets/Gif/SAGAwards.gif";
import event2 from "../../assets/Gif/E!.gif";
import event3 from "../../assets/Gif/Shake-if.gif";
import event4 from "../../assets/Gif/Drums.gif";

const HeroEvents = () => {
  const events = [
    {
      image: event1,
      title: "Toronto Film Summit",
      description: "Network with top filmmakers and industry professionals.",
    },
    {
      image: event2,
      title: "Indie Creators Conference",
      description:
        "A platform for independent filmmakers to showcase their work.",
    },
    {
      image: event3,
      title: "Animation Expo",
      description: "Discover the latest trends in animation and VFX.",
    },
    {
      image: event4,
      title: "Screenwriters Meetup",
      description: "Meet and collaborate with talented screenwriters.",
    },
  ];

  return (
    <section className="hero-events">
      <h2 className="hero-events__title">Upcoming Events</h2>
      <div className="hero-events__list">
        {events.map((event, index) => (
          <div key={index} className="hero-events__item">
            <div
              className="hero-events__image"
              style={{ backgroundImage: `url(${event.image})` }}
            ></div>
            <div className="hero-events__text">
              <h3 className="hero-events__title">{event.title}</h3>
              <p className="hero-events__description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroEvents;
