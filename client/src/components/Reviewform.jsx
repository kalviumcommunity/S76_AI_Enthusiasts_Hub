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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/reviews")
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
        setIsSubmitting(true);
        
        try {
            if (editingId) {
                // Update existing review
                await axios.put(`http://localhost:3000/api/reviews/${editingId}`, reviewData,{
                    withCredentials: true,
            });
                alert("Review updated successfully");
            } else {
                // Add new review
                await axios.post(`http://localhost:3000/api/reviews`, reviewData, {
                    withCredentials: true,
                });
                
                alert("Review added successfully");
            }
            
            // Reset form and fetch updated reviews
            setReviewData({ aiWebsite: "", websiteUrl: "", rating: 0, feedback: "", createdBy: "" });
            setEditingId(null);
            fetchReviews();
        } catch (error) {
            console.error("Error in submitting", error);
            alert("Error: " + (error.response?.data?.message || "Failed to process your request"));
        } finally {
            setIsSubmitting(false);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Convert rating to number if it's the rating field
        const processedValue = name === "rating" ? parseInt(value) || 0 : value;
        setReviewData({ ...reviewData, [name]: processedValue });
    };

    // Handle edit button click
    const handleEdit = (review) => {
        // Make sure we have all the required fields from the review object
        setReviewData({
            aiWebsite: review.aiWebsite || "",
            websiteUrl: review.websiteUrl || "",
            rating: review.rating || 0,
            feedback: review.feedback || "",
            createdBy: review.createdBy || "",
        });
        setEditingId(review._id);
    };

    // Handle cancel edit
    const handleCancelEdit = () => {
        setEditingId(null);
        setReviewData({ aiWebsite: "", websiteUrl: "", rating: 0, feedback: "", createdBy: "" });
    };

    // Handle delete button click
    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this review?")) {
            return;
        }
        
        try {
            await axios.delete(`http://localhost:3000/api/reviews/${id}`);
            alert("Review deleted successfully");
            fetchReviews();
        } catch (error) {
            console.error("Error deleting review", error);
            alert("Error: Failed to delete review");
        }
    };

    return (
        <div className="bg-gray-50 flex flex-col items-center w-full min-h-screen pt-10">
            <div className="max-w-5xl w-full px-4">
                <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">AI Website Reviews</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Form Section */}
                    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                        <h2 className="text-blue-700 font-bold text-xl mb-6">
                            {editingId ? "Update Review" : "Add Your Review"}
                        </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <label className="block">
                                    <span className="text-gray-700 font-medium">AI Website Name</span>
                                    <input 
                                        type="text" 
                                        name="aiWebsite" 
                                        value={reviewData.aiWebsite} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full p-2 mt-1 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700 font-medium">Website URL</span>
                                    <input 
                                        type="text" 
                                        name="websiteUrl" 
                                        value={reviewData.websiteUrl} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full p-2 mt-1 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700 font-medium">Rating (1-5)</span>
                                    <input 
                                        type="number" 
                                        name="rating" 
                                        min="1" 
                                        max="5"
                                        value={reviewData.rating} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full p-2 mt-1 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700 font-medium">Your Feedback</span>
                                    <textarea 
                                        name="feedback" 
                                        rows="4"
                                        value={reviewData.feedback} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full p-2 mt-1 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </label>
                                <label className="block">
                                    <span className="text-gray-700 font-medium">Your Name</span>
                                    <input 
                                        type="text" 
                                        name="createdBy" 
                                        value={reviewData.createdBy} 
                                        onChange={handleChange} 
                                        required 
                                        className="w-full p-2 mt-1 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </label>
                            </div>
                            <div className="mt-6">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className={`w-full ${isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} 
                                    text-white font-medium py-2 px-4 rounded transition duration-300`}
                                >
                                    {isSubmitting ? 'Processing...' : (editingId ? "Update Review" : "Submit Review")}
                                </button>
                                {editingId && (
                                    <button 
                                        type="button"
                                        onClick={handleCancelEdit}
                                        className="w-full mt-2 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition duration-300"
                                    >
                                        Cancel Edit
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                    
                    {/* Reviews Section */}
                    <div>
                        <h2 className="text-blue-700 font-bold text-xl mb-6">Latest Reviews</h2>
                        <div className="space-y-4 max-h-screen overflow-y-auto pr-2">
                            {reviews.length > 0 ? (
                                reviews.map((review) => (
                                    <div key={review._id} className="bg-white p-5 shadow rounded-lg border-l-4 border-blue-500">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-semibold text-gray-800">{review.aiWebsite}</h3>
                                            <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                                                Rating: {review.rating}/5
                                            </div>
                                        </div>
                                        <p className="text-sm text-blue-600 mb-3">
                                            <a href={review.websiteUrl} target="_blank" rel="noopener noreferrer">
                                                {review.websiteUrl}
                                            </a>
                                        </p>
                                        <p className="text-gray-600 mb-3">{review.feedback}</p>
                                        <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-100">
                                            <span className="text-sm text-gray-500">By: {review.createdBy}</span>
                                            <div className="flex gap-2">
                                                <button 
                                                    onClick={() => handleEdit(review)} 
                                                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded text-sm transition duration-300"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDelete(review._id)} 
                                                    className="bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1 rounded text-sm transition duration-300"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="bg-gray-50 p-8 text-center rounded-lg border border-gray-200">
                                    <p className="text-gray-500">No reviews yet. Be the first to add a review!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;