import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactModal from "react-modal";
import "./DetailsCard.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";
import ApplyModal from "../ApplyModal/ApplyModal";
import axios from "axios";

ReactModal.setAppElement("#root");

const DetailsCard = () => {
  const { id: jobId } = useParams();
  const [opportunity, setOpportunity] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  console.log("Job ID from URL:", jobId);

  useEffect(() => {
    const getJobBoard = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/opportunities/${jobId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch opportunity");
        }
        const data = await response.json();
        setOpportunity(data);
      } catch (error) {
        console.error("Error fetching opportunity:", error);
      }
    };

    getJobBoard();
  }, [jobId]);

  if (!opportunity) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-card">
      <Link to="/jobboard">
        <img
          className="page-header__icon-arrow-back"
          src={arrowBack}
          alt="Back arrow icon"
        />
      </Link>
      <h2 className="details-title">{opportunity.title}</h2>
      <p className="details-organization">{opportunity.organization_name}</p>
      <p className="details-location">Location: {opportunity.location}</p>
      <p className="details-posted">Posted: {opportunity.posted}</p>
      <p className="details-category">Category: {opportunity.category}</p>
      <p className="details-type">Type: {opportunity.type}</p>
      <p className="details-description">{opportunity.type_description}</p>
      <p className="details-org-description">{opportunity.description}</p>
      <p className="details-contact">
        Contact: {opportunity.contact_email} | {opportunity.phone}
      </p>
      <a
        className="details-website"
        href={opportunity.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
      <button onClick={() => setModalIsOpen(true)}>Apply</button>

      <ApplyModal
        isOpen={modalIsOpen}
        opportunity={opportunity}
        onCancel={() => setModalIsOpen(false)}
      />
    </div>
  );
};

export default DetailsCard;
