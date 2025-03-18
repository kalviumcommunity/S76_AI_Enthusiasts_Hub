import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Reviewform() {
    const navigate =useNavigate();
    const[AddReviews,setAddReviews] = useState({
        aiWebsite:"",
  websiteUrl: "",
  rating: 0,
  feedback: "",
  createdBy : "",
    });
 const [Reviews,setReviews] = useState([])
 const fetchReviews = async () => {
    try{
        const response =await axios.get('http://localhost:3000/api/reviews')
        setReviews(response.data)

    } catch (error){
        console.log("Error in fetching data",error)
    }
 }
 useEffect(()=>{
    fetchReviews();

 },[]);
 
 const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
        const response =await axios.post("http://localhost:3000/api/reviews",AddReviews,{
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.status === 201|| response.status === 200){
            setAddReviews ({
                aiWebsite:"",
                websiteUrl: "",
                rating: 0,
                feedback: "",
                createdBy : "",

            });
            alert("Review is added successfully");
            fetchReviews();
        }
    } catch (error){
        console.error("Error in the Submitting ",error);
    }
 } ;
 const handleChange = (e) => {
    setAddReviews((prevdata)=>({
        ...prevdata,
        [e.target.name]:e.target.value,
    }));
 };
//  const handlePage=()=>{
//     navigate('/reviews')
//  }
 return (
    <div className="bg-gray-100 flex flex-col items-center w-full min-h-screen pt-10">
    <h2 className="text-violet-800 font-bold text-2xl mb-8">
        Add reviews 
        </h2>
    <form onSubmit={handleSubmit} className="border-gray-200 border bg-violet-500 shadow-md p-10 w-[400px] rounded-md">
        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">aiWebsite</h2>
          <input
            type="text"
            name="aiWebsite"
            value={AddReviews.aiWebsite}
            placeholder="Enter your ai website"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>
        
        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">websiteUrl</h2>
          <input
            name="websiteUrl"
            value={AddReviews.websiteUrl}
            placeholder="Enter websiteUrl"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">rating</h2>
          <input
            type="text"
            name="rating"
            value={AddReviews.rating}
            placeholder="Enter rating"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>

        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">feedback</h2>
          <input
            type="text"
            name="feedback"
            value={AddReviews.feedback}
            placeholder="Enter your feedback"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>
        <label className="block mb-3">
          <h2 className="text-gray-900 font-medium">createdBy</h2>
          <input
            type="text"
            name="createdBy"
            value={AddReviews.createdBy}
            placeholder="Enter your name"
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 mb-4 bg-gray-50 border border-gray-500 rounded-md"
          />
        </label>

        <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700"
         
        >
          Submit
        </button>
</form>
</div>
 )
}
export default Reviewform;