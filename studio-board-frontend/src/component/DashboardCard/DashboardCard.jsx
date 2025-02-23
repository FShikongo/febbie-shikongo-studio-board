import React from "react";
import "./DashboardCard.scss";

import logo2 from "../../assets/StudioLogo/Studio_Logo2.png";

const logos = [logo2];

const DashboardCard = ({ company }) => {
  if (!company) {
    return <p>Loading company details...</p>;
  }

  return (
    <div className="dashboard-card">
      {/* About Section */}
      <section className="dashboard-card__about">
        <img
          src={logo2} // Default logo fallback
          alt={`${company.name || "Company"} Logo`}
          className="dashboard-card__logo"
        />
        <h2 className="dashboard-card__name">
          {company.name || "Company Name"}
        </h2>
        <p className="dashboard-card__description">
          {company.description || "No company description available."}
        </p>
      </section>

      {/* Organization Details */}
      <section className="dashboard-card__details">
        <h3>Organization Details</h3>
        <p>
          <strong>Employees:</strong> {company.employees || "N/A"}
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
          <strong>Website:</strong>{" "}
          <a
            href={company.website || "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {company.website || "N/A"}
          </a>
        </p>
        <p>
          <strong>Head Office:</strong> {company.headOffice || "N/A"}
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
                >
                  {social.platform}
                </a>
              ))
            : "No social media links available."}
        </p>
      </section>

      {/* Active Opportunities */}
      <section className="dashboard-card__opportunities">
        <h3>Active Opportunities</h3>
        {company.opportunities && company.opportunities.length > 0 ? (
          <ul>
            {company.opportunities.map((opportunity) => (
              <li key={opportunity.id}>
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
        <a href="/create" className="dashboard-card__create-button">
          Create New Opportunity
        </a>
      </section>
    </div>
  );
};

export default DashboardCard;
