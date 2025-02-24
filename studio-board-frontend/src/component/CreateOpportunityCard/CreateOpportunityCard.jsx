import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateOpportunityCard.scss";
import axios from "axios";

const baseURL = "http://localhost:5000";

export default function CreateOpportunityCard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    organization_name: "",
    location: "",
    website: "",
    contact_email: "",
    phone: "",
    description: "",
    category: "- Select -",
    type: "- Select -",
    title: "",
    type_description: "",
  });

  const categories = ["- Select -", "Job", "Volunteer", "Events"];
  const types = [
    "- Select -",
    "Contract",
    "Freelance",
    "Full-Time",
    "Part-Time",
    "Festival",
    "Networking",
    "Webinar",
    "Summit",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const currentDate = new Date().toISOString();

    try {
      await axios.post(`${baseURL}/api/jobs`, {
        ...formData,
        posted: currentDate,
      });
      alert("✅ Opportunity Created Successfully!");

      // Redirect user to job board
      navigate("/job-board");

      // Reset form after submission
      setFormData({
        organization_name: "",
        location: "",
        website: "",
        contact_email: "",
        phone: "",
        description: "",
        category: "- Select -",
        type: "- Select -",
        title: "",
        type_description: "",
      });
    } catch (error) {
      console.error("❌ Error creating opportunity:", error);
      alert("⚠️ Failed to create opportunity. Please try again.");
    }
  };

  return (
    <div className="create-opportunity-card">
      <h2>Create an Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <h3>Organization Information</h3>
        <p className="section-instructions">
          Please provide details about your organization, including name,
          location, and contact information.
        </p>

        <label htmlFor="organization_name">
          Organization Name:
          <input
            type="text"
            id="organization_name"
            name="organization_name"
            value={formData.organization_name}
            onChange={handleChange}
            autoComplete="organization"
            required
          />
        </label>

        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="address-level2"
            required
          />
        </label>

        <label htmlFor="website">
          Website:
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            autoComplete="url"
            required
          />
        </label>

        <label htmlFor="contact_email">
          Contact Email:
          <input
            type="email"
            id="contact_email"
            name="contact_email"
            value={formData.contact_email}
            onChange={handleChange}
            autoComplete="email"
            required
          />
        </label>

        <label htmlFor="phone">
          Phone:
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            required
          />
        </label>

        <label htmlFor="description">
          Organization Description:
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            autoComplete="off"
            required
          ></textarea>
        </label>

        <h3>Opportunity Details</h3>
        <p className="section-instructions">
          Provide details about the opportunity, including category, type,
          title, and description.
        </p>

        <label htmlFor="category">
          Category:
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-dropdown"
            autoComplete="off"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="type">
          Type:
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-dropdown"
            autoComplete="off"
          >
            {types.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="title">
          Title:
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            autoComplete="job-title"
            required
          />
        </label>

        <label htmlFor="type_description">
          Opportunity Description:
          <textarea
            id="type_description"
            name="type_description"
            value={formData.type_description}
            onChange={handleChange}
            autoComplete="off"
            required
          ></textarea>
        </label>

        <button type="submit" className="create-opportunity-card__submit">
          Create Opportunity
        </button>
      </form>
    </div>
  );
}
