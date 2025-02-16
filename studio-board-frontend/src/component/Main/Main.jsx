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
            {/* Job Opportunity 1 */}
            <div className="features__card">
              <div
                className="features__card-image"
                style={{
                  backgroundImage: "url('your-job-image-url-here')",
                }}
              >
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
              <div
                className="features__card-image"
                style={{
                  backgroundImage: "url('your-job-image-url-here')",
                }}
              >
                <h3 className="features__card-title">Job Opportunity 2</h3>
              </div>
              <div className="features__card-text">
                <p className="features__card-description">
                  Explore opportunities with top production companies.
                </p>
              </div>
            </div>

            <div className="features__card">
              <div
                className="features__card-image"
                style={{
                  backgroundImage: "url('your-film-festival-image-url-here')",
                }}
              >
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
              src="your-partner-logo-url-here"
              alt="Partner 1"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 2"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 3"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 4"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 5"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 6"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 7"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 8"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 9"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 10"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 11"
            />
            <img
              className="partner-showcase__logo"
              src="your-partner-logo-url-here"
              alt="Partner 12"
            />
            {/* Add more logos as needed */}
          </div>
        </section>
      </main>
    </>
  );
}
