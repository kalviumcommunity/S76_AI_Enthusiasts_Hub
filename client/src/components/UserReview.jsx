import React from "react";

const UserReview = ({ review }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-blue-300 font-semibold">{review.username}</h3>
      <p className="text-yellow-400">⭐ {review.rating} / 5</p>
      <p className="text-gray-300 mt-2">"{review.comment}"</p>
    </div>
  );
};

export default UserReview;
