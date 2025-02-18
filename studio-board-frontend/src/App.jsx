import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
// import DashBoardPage from "./pages/JobBoardPage/JobBoardPage";
// import DetailsPage from "./pages/DetailsPage/DetailsPage";
// import SaveJobEventItem from "./component/SaveJobEventItem/SaveJobEventItem";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/dashboard/:id" element={<DetailsPage />} />
          <Route path="/dashboard/save" element={<SaveJobEventItem />} />
        </Routes>
        <Footer /> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
