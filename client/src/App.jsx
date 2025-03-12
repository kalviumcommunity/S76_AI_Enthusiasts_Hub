import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPg from "../src/components/landingpage";
import UserReviewsPage from "../src/pages/UserReviewsPage"; // Import new page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPg />} />
        <Route path="/user-reviews" element={<UserReviewsPage />} /> {/* New endpoint */}
      </Routes>
    </Router>
  );
}

export default App;
