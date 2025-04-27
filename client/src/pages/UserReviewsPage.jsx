// client/src/pages/UserReviewsPage.jsx
import React, { useEffect, useState } from "react";
import UserReview from "../components/UserReview";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserReviewsPage() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigateToAddReview = () => {
    navigate('/reviews');
  };

  useEffect(() => {
    // Fetch reviews - Fixed the port number to 3000
    axios.get("http://localhost:3000/api/reviews")
      .then((res) => {
        setReviews(res.data);
        setFilteredReviews(res.data);
        setIsLoading(false);
        
        // Extract unique creators for dropdown
        const uniqueCreators = [...new Set(res.data.map(review => review.createdBy).filter(Boolean))];
        setCreators(uniqueCreators);
      })
      .catch((err) => {
        console.error("Error fetching reviews:", err);
        setIsLoading(false);
      });
  }, []);

  // Filter reviews when creator selection changes
  useEffect(() => {
    if (selectedCreator === "all") {
      setFilteredReviews(reviews);
    } else {
      const filtered = reviews.filter(
        (review) => review.createdBy === selectedCreator
      );
      setFilteredReviews(filtered);
    }
  }, [selectedCreator, reviews]);

  // Handle dropdown change
  const handleCreatorChange = (e) => {
    setSelectedCreator(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-400 mt-6">User Reviews</h1>
      
      <div className="mt-6 w-full max-w-4xl flex items-center justify-between">
        <button 
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg"
          onClick={handleNavigateToAddReview}>
          Add Review
        </button>
        
        <div className="relative">
          <select
            value={selectedCreator}
            onChange={handleCreatorChange}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg appearance-none pr-8 cursor-pointer border border-gray-700"
          >
            <option value="all">All Creators</option>
            {creators.map((creator) => (
              <option key={creator} value={creator}>
                {creator}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-6 max-w-4xl w-full">
        {isLoading ? (
          <p className="text-gray-400 text-center py-10">Loading reviews...</p>
        ) : filteredReviews.length > 0 ? (
          filteredReviews.map((review) => <UserReview key={review.id || review._id} {...review} />)
        ) : (
          <p className="text-gray-400 text-center py-10">No reviews found from this creator.</p>
        )}
      </div>
    </div>
  );
}

export default UserReviewsPage;