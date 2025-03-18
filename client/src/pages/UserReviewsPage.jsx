import React, { useEffect, useState } from "react";
import UserReview from "../components/UserReview";
import {useNavigate} from "react-router-dom";

function UserReviewsPage() {
  const navigate =useNavigate();
  const [reviews, setReviews] = useState([]);
  const handleChange=()=>{
     navigate('/reviews')
  }
  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json()) 
      .then((data) => setReviews(data)) 
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);


  return (
    
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-400">User Reviews</h1>
      <div className="mt-6 space-y-6 max-w-4xl w-full">
        <button className="mt-6 bg-blue-500 hover:bg-purple-600 px-6 py-3 rounded-lg text-lg font-semibold transition shadow-lg" onClick={handleChange}>Add Review</button>
        {reviews.map((review) => <UserReview key={review.id} {...review} />)}
      </div>
    </div>
  );
}

export default UserReviewsPage;
