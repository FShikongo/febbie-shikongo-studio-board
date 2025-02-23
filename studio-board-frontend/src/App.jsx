import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import JobBoardPage from "./pages/JobBoardPage/JobBoardPage";
import FeaturesPage from "./pages/FeaturesPage/FeaturesPage";
import EventsPage from "./pages/EventsPage/EventsPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
// import DetailsPage from "./pages/DetailsPage/DetailsPage";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/jobboard" element={<JobBoardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
