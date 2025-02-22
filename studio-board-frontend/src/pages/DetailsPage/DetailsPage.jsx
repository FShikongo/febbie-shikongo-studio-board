import "./DetailsPage.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "../../component/DetailsCard/DetailsCard";
import HeroDetails from "../../component/HeroDetails/HeroDetails";

const baseURL = "http://localhost:5000"; // Ensure this matches your backend

export default function DetailsPage() {
  const { id } = useParams();
  const [opportunity, setOpportunity] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`${baseURL}/opportunities/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch job details");
        }
        const data = await response.json();
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
