import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
import DashBoardPage from "./pages/DashBoardPage/DashBoardPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";
import AddJobEventItem from "./component/AddJobEventItem/AddJobEventItem";
import EditJobEventItem from "./component/EditJobEventItem/EditJobEventItem";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/dashboard/:id" element={<DetailsPage />} />
          <Route path="/dashboard/add" element={<AddJobEventItem />} />
          <Route path="/dashboard/:id/edit" element={<EditJobEventItem />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
