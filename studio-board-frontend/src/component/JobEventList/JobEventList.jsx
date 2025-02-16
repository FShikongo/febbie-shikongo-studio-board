import "./JobEventList.scss";
import JobEventCard from "../JobEventList/JobEventList";
import Modal from "../Modal/Modal";
import sortIcon from "../../assets/icons/sort-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom"; //remove

const baseURL = "http://localhost:8080";

const jobData = [
  {
    id: 1,
    organization_name: "Studio Board",
    category: "job",
    type: "Full-time",
    title: "Film Editor",
    location: "Toronto, Canada",
    remote: false,
    timestamp: new Date().toISOString(),
    description:
      "Seeking an experienced film editor to work on an upcoming independent feature film. Must have proficiency in Adobe Premiere Pro and DaVinci Resolve.",
  },
  {
    id: 2,
    organization_name: "Indie Films Co.",
    category: "job",
    type: "Part-time",
    title: "Screenwriter",
    location: "Vancouver, Canada",
    remote: true,
    timestamp: new Date().toISOString(),
    description:
      "Looking for a talented screenwriter to develop an original screenplay for an upcoming project.",
  },
];

export default function JobTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredJobs = jobData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.organization_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="job-table">
      {/* Title and Search Section */}
      <div className="job-table__header">
        <h2>Job Board</h2>
        <input
          type="text"
          placeholder="Search for jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="job-table__search"
        />
      </div>

      {/* Table Headers */}
      <div className="job-table__labels">
        <span>Title</span>
        <span>Location</span>
        <span>Company</span>
        <span>Type</span>
        <span>Actions</span>
      </div>

      {/* Job Listings */}
      <div className="job-table__list">
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-table__row">
            <span
              className="job-table__title"
              onClick={() => alert(`Opening job: ${job.title}`)}
            >
              {job.title}
            </span>
            <span>{job.location}</span>
            <span>{job.organization_name}</span>
            <span>{job.type}</span>
            <span className="job-table__actions">
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
