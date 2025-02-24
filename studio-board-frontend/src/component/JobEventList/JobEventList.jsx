import "./JobEventList.scss";
import DetailsModal from "../DetailsModal/DetailsModal";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SortIcon from "../../assets/Icons/sort-24px.svg";

const baseURL = "http://localhost:5000";

export default function JobEventList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobData, setJobData] = useState([]);
  const [favorites, setFavorites] = useState({});
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationConfirmed, setApplicationConfirmed] = useState(false);
  const [sortOrder, setSortOrder] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/jobs`);
      setJobData(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("Error fetching job data:", error);
      setJobData([]);
    }
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openDetailsModal = (job) => {
    setSelectedJob(job);
    setDetailsModalOpen(true);
    setApplicationConfirmed(false);
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
        <button
          className="job-event-list__features-button"
          onClick={() => navigate("/features")}
        >
          Features
        </button>
      </div>

      <div className="job-event-list__labels">
        {["Title", "Location", "Company", "Type", "Actions"].map(
          (label, index) => (
            <span key={index}>
              {label}{" "}
              <img src={SortIcon} alt="Sort icon" className="sort-icon" />
            </span>
          )
        )}
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
