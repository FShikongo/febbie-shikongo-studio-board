import { useState, useEffect } from "react";
import "../ApplyModal/ApplyModal.scss"; // ✅ Fixed import
import CloseIcon from "../../assets/icons/close-24px.svg";

const ApplyModal = ({ isOpen, onClose, onApply, jobId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (jobId) {
      fetch(`/api/jobs/${jobId}`)
        .then((response) => {
          console.log("Raw response:", response); // ✅ Debugging: Log the raw response
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log("Fetched job details:", data); // ✅ Debugging: Log actual job data
          setJob(data);
        })
        .catch((error) => console.error("Error fetching job details:", error));
    }
  }, [jobId]);

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onApply === "function") {
      onApply(formData);
    } else {
      console.error("onApply is not a function");
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="apply-modal-overlay">
      <div className="apply-modal">
        <button
          type="button"
          className="modal__close-button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <img src={CloseIcon} alt="Close" />
        </button>
        <h2>
          {job
            ? `Apply for ${job.title} at ${job.organization_name}`
            : "Apply for this Opportunity"}
        </h2>
        <form onSubmit={handleSubmit} className="apply-modal__form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Why are you interested?"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <div className="apply-modal__buttons">
            <button
              type="button"
              onClick={onClose}
              className="modal-button cancel"
            >
              Cancel
            </button>
            <button type="submit" className="modal-button apply">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ✅ Ensure there is ONLY ONE default export
export default ApplyModal;
