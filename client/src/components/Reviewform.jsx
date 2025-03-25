import React, { useEffect, useState } from "react";
import axios from 'axios';

function ReviewForm() {
    const [reviews, setReviews] = useState([]);
    const [reviewData, setReviewData] = useState({
        aiWebsite: "",
        websiteUrl: "",
        rating: 0,
        feedback: "",
        createdBy: "",
    });
    const [editingId, setEditingId] = useState(null); // Track if editing an existing review

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/reviews");
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching reviews", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Handle form submission (Create or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                // Update existing review
                await axios.put(`http://localhost:3000/api/reviews/${editingId}`, reviewData);
                alert("Review updated successfully");
            } else {
                // Add new review
                await axios.post("http://localhost:3000/api/reviews", reviewData);
                alert("Review added successfully");
            }
            setReviewData({ aiWebsite: "", websiteUrl: "", rating: 0, feedback: "", createdBy: "" });
            setEditingId(null);
            fetchReviews();
        } catch (error) {
            console.error("Error in submitting", error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        setReviewData({ ...reviewData, [e.target.name]: e.target.value });
    };

    // Handle edit button click
    const handleEdit = (review) => {
        setReviewData(review);
        setEditingId(review._id);
    };

    // Handle delete button click
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/api/reviews/${id}`);
            alert("Review deleted successfully");
            fetchReviews();
        } catch (error) {
            console.error("Error deleting review", error);
        }
    };

    return (
        <div className="bg-gray-100 flex flex-col items-center w-full min-h-screen pt-10">
            <h2 className="text-violet-800 font-bold text-2xl mb-8">
                {editingId ? "Update Review" : "Add Review"}
            </h2>
            <form onSubmit={handleSubmit} className="border-gray-200 border bg-violet-500 shadow-md p-10 w-[400px] rounded-md">
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">AI Website</h2>
                    <input type="text" name="aiWebsite" value={reviewData.aiWebsite} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Website URL</h2>
                    <input type="text" name="websiteUrl" value={reviewData.websiteUrl} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Rating</h2>
                    <input type="number" name="rating" value={reviewData.rating} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Feedback</h2>
                    <textarea name="feedback" value={reviewData.feedback} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"></textarea>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Created By</h2>
                    <input type="text" name="createdBy" value={reviewData.createdBy} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <button type="submit" className="bg-green-500 text-white font-bold py-2 px-4 rounded-md hover:bg-green-700">
                    {editingId ? "Update Review" : "Submit"}
                </button>
            </form>
            
            <h2 className="text-violet-800 font-bold text-2xl mt-10">Reviews</h2>
            <div className="w-[600px] mt-5">
                {reviews.map((review) => (
                    <div key={review._id} className="bg-white p-4 shadow-md rounded-md mb-4">
                        <p><strong>AI Website:</strong> {review.aiWebsite}</p>
                        <p><strong>URL:</strong> {review.websiteUrl}</p>
                        <p><strong>Rating:</strong> {review.rating}</p>
                        <p><strong>Feedback:</strong> {review.feedback}</p>
                        <p><strong>Created By:</strong> {review.createdBy}</p>
                        <div className="flex gap-2 mt-3">
                            <button onClick={() => handleEdit(review)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-700">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(review._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ReviewForm;
