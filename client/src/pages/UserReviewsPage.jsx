import React from "react";
import UserReview from "../components/UserReview";

const UserReviewsPage = () => {
  const dummyReviews = [
    { id: 1, username: "TechGeek_99", rating: 5, comment: "This platform helped me find amazing AI tools!" },
    { id: 2, username: "AI_Learner", rating: 4, comment: "Great resource for AI enthusiasts! Would love more categories." },
    { id: 3, username: "InnovatorX", rating: 5, comment: "I discovered so many AI projects here! Highly recommended." },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-blue-400">User Reviews</h1>
      
      <div className="mt-6 space-y-6 max-w-4xl w-full">
        {dummyReviews.map((review) => (
          <UserReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default UserReviewsPage;
