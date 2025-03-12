// import React, { useEffect, useState } from "react";
// import UserReview from "../components/UserReview";
// import { data } from "react-router-dom";

// function UserReviewsPage(){
//   const [review,setReview]=useState([]);
//   useEffect(()=>
//   {
//     fetch("http://localhost:3000/users").then((data)=>{
//       setReview(data)
//     })
//     .catch((err)=>{
//       console.error("error in fetching",err)
//     })
//   },[])

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
//       <h1 className="text-4xl font-bold text-blue-400">User Reviews</h1>
      
//       <div className="mt-6 space-y-6 max-w-4xl w-full">
//         {/* {review.map((review) => (
//           <UserReview key={review.id} 
//           {...review} />
//         ))} */}
//         {review.map((review)=>(
//           <UserReview key={review.id} {...review}/>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserReviewsPage;


import React, { useEffect, useState } from "react";
import UserReview from "../components/UserReview";

function UserReviewsPage() {
  const [reviews, setReviews] = useState([]);

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
        {reviews.map((review) => <UserReview key={review.id} {...review} />)}
      </div>
    </div>
  );
}

export default UserReviewsPage;
