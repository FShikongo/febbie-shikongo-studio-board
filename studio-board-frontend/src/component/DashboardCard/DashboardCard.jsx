import React from "react";
import "./DashboardCard.scss";
import logo2 from "../../assets/StudioLogo/Studio_Logo2.png";

const DashboardCard = ({ company }) => {
  if (!company) {
    return <p>Loading company details...</p>;
  }

  return (
    <div className="dashboard-profile">
      {/* Header Section */}
      <header className="dashboard-profile__header">
        <img
          src={logo2}
          alt={`${company.name || "Company"} Logo`}
          className="dashboard-profile__logo"
        />
        <div className="dashboard-profile__info">
          <h2 className="dashboard-profile__name">
            {company.name || "Company Name"}
          </h2>
          <p className="dashboard-profile__description">
            {company.description || "No company description available."}
          </p>
          <a
            href={company.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="dashboard-profile__website"
          >
            {company.website || "N/A"}
          </a>
        </div>
      </header>

      {/* About Section */}
      <section className="dashboard-profile__about">
        <h3>About</h3>
        <p>
          <strong>Employees:</strong> {company.employees || "N/A"}
        </p>
        <p>
          <strong>Head Office:</strong> {company.headOffice || "N/A"}
        </p>
        <p>
          <strong>Office Locations:</strong>{" "}
          {company.locations?.join(", ") || "N/A"}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href={`mailto:${company.email}`}>{company.email || "N/A"}</a>
        </p>
        <p>
          <strong>Social Media:</strong>{" "}
          {company.socials && company.socials.length > 0
            ? company.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dashboard-profile__social"
                >
                  {social.platform}
                </a>
              ))
            : "No social media links available."}
        </p>
      </section>

      {/* Active Opportunities */}
      <section className="dashboard-profile__opportunities">
        <h3>Active Opportunities</h3>
        {company.opportunities && company.opportunities.length > 0 ? (
          <ul>
            {company.opportunities.map((opportunity) => (
              <li
                key={opportunity.id}
                className="dashboard-profile__opportunity"
              >
                <a
                  href="#"
                  onClick={() => company.onViewOpportunity(opportunity.id)}
                >
                  {opportunity.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No active opportunities available.</p>
        )}
        <a href="/create" className="dashboard-profile__create-button">
          Create New Opportunity
        </a>
      </section>
    </div>
  );
};

export default DashboardCard;
