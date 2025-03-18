import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPg from "../src/components/landingpage";
import UserReviewsPage from "../src/pages/UserReviewsPage"; // Import new page
import Reviewform from "./components/Reviewform"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/user-reviews" element={<UserReviewsPage />} /> {/* New endpoint */}
        <Route path="/reviews" element={<Reviewform />} /> {/* New endpoint */}

      </Routes>
    </Router>
  );
}

export default App;
