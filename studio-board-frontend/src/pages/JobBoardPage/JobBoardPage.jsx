import "./JobBoardPage.scss";
import HeroJB from "../../component/HeroJB/HeroJB";
// import JobEventList from "../../component/JobEventList/JobEventList";
import JobEventCard from "../../component/JobEventCard/JobEventCard";

export default function JobBoard() {
  return (
    <>
      <HeroJB />
      <JobEventCard />
      {/* <JobEventList /> */}
    </>
  );
}
