//
import "./JobEventList.scss";
import DetailsModal from "../DetailsModal/DetailsModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const baseURL = "http://localhost:5000";

export default function JobEventList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobData, setJobData] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationConfirmed, setApplicationConfirmed] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/jobs`)
      .then((response) => {
        console.log("API response:", response.data);
        setJobData(Array.isArray(response.data) ? response.data : []);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setJobData([]);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openDetailsModal = (job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
    setApplicationConfirmed(false); // Reset confirmation when modal opens
  };

  const closeDetailsModal = () => {
    setSelectedJob(null);
    setDetailsModalOpen(false);
  };

  const confirmApplication = () => {
    setApplicationConfirmed(true);
  };

  return (
    <div className="job-event-list">
      <div className="job-event-list__header">
        <h2>Studio Board</h2>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="job-event-list__search"
        />
      </div>

      <div className="job-event-list__labels">
        <span>Title</span>
        <span>Location</span>
        <span>Company</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      <div className="job-event-list__list">
        {jobData
          .filter(
            (job) =>
              job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              job.organization_name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
          .map((job) => (
            <div key={job.id} className="job-event-list__row">
              <span
                className="job-event-list__title"
                onClick={() => openDetailsModal(job)}
              >
                {job.title}
              </span>
              <span>{job.location}</span>
              <span>{job.organization_name}</span>
              <span>{job.type}</span>
              <span className="job-event-list__actions">
                <button
                  className="apply-button"
                  onClick={() => openDetailsModal(job)}
                >
                  View Details
                </button>
                <span
                  onClick={() => toggleFavorite(job.id)}
                  className="favorite-icon"
                >
                  {favorites[job.id] ? (
                    <FaHeart className="favorite-icon__active" />
                  ) : (
                    <FaRegHeart />
                  )}
                </span>
              </span>
            </div>
          ))}
      </div>

      {detailsModalOpen && (
        <DetailsModal
          isOpen={detailsModalOpen}
          job={selectedJob}
          onClose={closeDetailsModal}
          onApply={confirmApplication}
          applicationConfirmed={applicationConfirmed}
        />
      )}
    </div>
  );
}
