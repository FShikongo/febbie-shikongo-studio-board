import "./DashboardPage.scss";
import DashboardCard from "../../component/DashboardCard/DashboardCard";

const companyData = {
  logo: "/path-to-logo.png", // Ensure this image exists in the public folder
  name: "Studio Board",
  description: "A platform for entertainment professionals.",
  employees: 50,
  locations: ["Toronto, Canada", "Los Angeles, USA"],
  email: "info@studioboard.com",
  website: "https://studioboard.com",
  headOffice: "123 Studio Street, Toronto, Canada",
  socials: [
    { platform: "LinkedIn", link: "https://linkedin.com/company/studioboard" },
    { platform: "Twitter", link: "https://twitter.com/studioboard" },
  ],
  opportunities: [
    { id: 1, title: "Film Editor" },
    { id: 2, title: "Production Assistant" },
  ],
  onViewOpportunity: (id) => console.log(`Viewing opportunity ${id}`),
};

export default function DashboardPage() {
  return (
    <>
      <DashboardCard company={companyData} />
    </>
  );
}
