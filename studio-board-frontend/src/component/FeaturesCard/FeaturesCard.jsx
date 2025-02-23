import "./FeaturesPage.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "http://localhost:5000";

export default function FeaturesPage() {
  const [features, setFeatures] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [volunteerOpportunities, setVolunteerOpportunities] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchFeatures();
    fetchOpportunities();
  }, []);

  const fetchFeatures = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/features`);
      setFeatures(response.data);
    } catch (error) {
      console.error("Error fetching featured opportunities:", error);
    }
  };

  const fetchOpportunities = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/jobs`);
      const allOpportunities = response.data;

      setJobs(
        allOpportunities
          .filter((opportunity) => opportunity.category === "Job")
          .slice(0, 4)
      );
      setVolunteerOpportunities(
        allOpportunities
          .filter((opportunity) => opportunity.category === "Volunteer")
          .slice(0, 4)
      );
      setEvents(
        allOpportunities
          .filter((opportunity) => opportunity.category === "Event")
          .slice(0, 4)
      );
    } catch (error) {
      console.error("Error fetching opportunities:", error);
    }
  };

  return (
    <div className="features-page">
      <section className="feature-section">
        <div className="feature-category">
          <h2>Job Openings</h2>
          <ul>
            {jobs.map((job) => (
              <li key={job.id}>
                {job.title} - {job.organization_name}
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-category">
          <h2>Volunteer Opportunities</h2>
          <ul>
            {volunteerOpportunities.map((volunteer) => (
              <li key={volunteer.id}>
                {volunteer.title} - {volunteer.organization_name}
              </li>
            ))}
          </ul>
        </div>

        <div className="feature-category">
          <h2>Upcoming Events</h2>
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                {event.title} - {event.organization_name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
