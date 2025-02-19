import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import HomePage from "./pages/HomePage/HomePage";
// import JobBoardPage from "./pages/JobBoardPage/JobBoardPage";
// import DetailsPage from "./pages/DetailsPage/DetailsPage";
// import SaveJobEventItem from "./component/SaveJobEventItem/SaveJobEventItem";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/jobboard" element={<JobBoardPage />} /> */}
          {/* <Route path="/jobboard/:id" element={<DetailsPage />} /> */}
          {/* <Route path="/jobboard/save" element={<SaveJobEventItem />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
