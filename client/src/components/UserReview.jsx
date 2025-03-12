import React from "react";

function UserReview ({aiWebsite,websiteUrl,rating,feedback,createdBy}) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md">
      <h3 className="text-blue-300 font-semibold">Website : {aiWebsite}</h3>
      <p className="text-yellow-400">Link : {websiteUrl}</p>
      <p className="text-gray-300 mt-2">Rating : {rating}⭐ / 5</p>
      <p className="text-gray-300 mt-2">Feedback : {feedback}</p>
      <p className="text-gray-300 mt-2">CreatedBy : {createdBy}</p>

    </div>
  );
};

export default UserReview;
