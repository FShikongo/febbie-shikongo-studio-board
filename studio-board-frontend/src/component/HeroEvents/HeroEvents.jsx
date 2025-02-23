import React from "react";
import "./HeroEvents.scss";

import event1 from "../../assets/Events/event1.jpg";
import event2 from "../../assets/Events/event2.jpg";
import event3 from "../../assets/Events/event3.jpg";
import event4 from "../../assets/Events/event4.jpg";

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
