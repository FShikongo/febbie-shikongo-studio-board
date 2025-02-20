import "./JobEventList.scss";
import JobEventCard from "../JobEventCard/JobEventCard";
import ApplyModal from "../ApplyModal/ApplyModal";
import axios from "axios";
import { useEffect, useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

const baseURL = "http://localhost:3000";

export default function JobEventList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [jobData, setJobData] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/jobs`)
      .then((response) => {
        console.log("API response:", response.data); // Log response

        // Ensure response data is an array before setting state
        if (Array.isArray(response.data)) {
          setJobData(response.data);
        } else {
          console.error("Unexpected API response format:", response.data);
          setJobData([]); // Fallback to empty array to prevent crashes
        }
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setJobData([]); // Ensure jobData doesn't remain undefined
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.organization_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-event-list">
      {/* Header Section */}
      <div className="job-event-list__header">
        <h2>Job Board</h2>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="job-event-list__search"
        />
      </div>

      {/* Table Headers */}
      <div className="job-event-list__labels">
        <span>Title</span>
        <span>Location</span>
        <span>Company</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      {/* Job Listings */}
      <div className="job-event-list__list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-event-list__row">
            <span
              className="job-event-list__title"
              onClick={() => alert(`Opening job: ${job.title}`)}
            >
              {job.title}
            </span>
            <span>{job.location}</span>
            <span>{job.organization_name}</span>
            <span>{job.type}</span>
            <span className="job-event-list__actions">
              <button className="apply-button">Apply</button>
              <span
                onClick={() => toggleFavorite(job.id)}
                className="favorite-icon"
              >
                {favorites[job.id] ? <FaHeart color="red" /> : <FaRegHeart />}
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
