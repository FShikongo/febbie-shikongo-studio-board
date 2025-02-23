import React, { useState } from "react";
import "./CreateOpportunityCard.scss";
import axios from "axios";

const CreateOpportunityCard = ({ onOpportunityCreated }) => {
  const [formData, setFormData] = useState({
    category: "",
    type: "",
    title: "",
    posted: "",
    type_description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/jobs",
        formData
      );
      console.log("Opportunity created:", response.data);
      alert("Opportunity successfully created!");
      setFormData({
        category: "",
        type: "",
        title: "",
        posted: "",
        type_description: "",
      });
      onOpportunityCreated();
    } catch (error) {
      console.error("Error creating opportunity:", error);
      alert("Failed to create opportunity.");
    }
  };

  return (
    <div className="create-opportunity-card">
      <h2>Create a New Opportunity</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Posted:
          <input
            type="text"
            name="posted"
            value={formData.posted}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description:
          <textarea
            name="type_description"
            value={formData.type_description}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateOpportunityCard;
