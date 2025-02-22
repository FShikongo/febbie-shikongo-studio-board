import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../component/DetailsCard/DetailsCard";
import HeroDetails from "../../component/HeroDetails/HeroDetails";

const baseURL = "http://localhost:5000"; // Ensure this is correct

export default function DetailsPage() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    console.log("Fetching job details for ID:", id); // ✅ Log ID to make sure it's correct

    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${baseURL}/api/jobs/${id}`);
        console.log("API Response Status:", response.status); // ✅ Log response status

        if (!response.ok) {
          throw new Error(
            `Failed to fetch job details: ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("Fetched job details:", data); // ✅ Log data received
        setOpportunity(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [id]);

  if (!opportunity) {
    return <p>Loading job details...</p>;
  }

  return (
    <>
      <HeroDetails />
      <DetailsCard opportunity={opportunity} />
    </>
  );
}
