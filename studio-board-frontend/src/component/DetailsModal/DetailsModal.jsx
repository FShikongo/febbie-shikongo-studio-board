import React from "react";
import "../DetailsModal/DetailsModal.scss";
import arrowBack from "../../assets/icons/arrow_back-24px.svg";

const DetailsModal = ({ isOpen, job, onClose, onApply }) => {
  if (!isOpen || !job) return null;

  return (
    <div className="details-modal-overlay">
      <div className="details-modal">
        <button className="modal__close-button" onClick={onClose}>
          <img src={arrowBack} alt="Close" />
        </button>
        <h2 className="details-title">{job.title}</h2>
        <p className="details-organization">{job.organization_name}</p>
        <p className="details-org-description">About: {job.description}</p>
        <p className="details-location">Location: {job.location}</p>
        <p className="details-posted">Posted: {job.posted}</p>
        <p className="details-category">Category: {job.category}</p>
        <p className="details-type">Type: {job.type}</p>
        <p className="details-description">
          Description: {job.type_description}
        </p>
        <p className="details-contact">
          Contact: {job.contact_email} | {job.phone}
        </p>
        <a
          className="details-website"
          href={job.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>
        <button onClick={() => onApply(job.id)}>Apply</button>
      </div>
    </div>
  );
};

export default DetailsModal;
