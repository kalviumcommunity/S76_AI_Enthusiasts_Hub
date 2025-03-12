const Review = require("../models/reviewsSchema"); // Import Review Schema

// ✅ Create multiple reviews
exports.createReviews = async (req, res) => {
  try {
    const reviews = req.body; // Expecting an array of reviews
    if (!Array.isArray(reviews) || reviews.length === 0) {
      return res.status(400).json({ message: "Invalid input: Expecting an array of reviews" });
    }

    const newReviews = await Review.insertMany(reviews);
    res.status(201).json({ message: "Reviews created successfully!", reviews: newReviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get all reviews
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a review
exports.updateReview = async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReview) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review updated successfully!", review: updatedReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete a review
exports.deleteReview = async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    if (!deletedReview) return res.status(404).json({ message: "Review not found" });
    res.status(200).json({ message: "Review deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
