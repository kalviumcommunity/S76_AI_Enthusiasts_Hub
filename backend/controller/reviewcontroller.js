const Review = require("../models/reviewsSchema"); // Import Review Schema
const { validateReview } = require("../models/validation"); // Import Joi Validation

// ✅ Create a single review (with validation)
exports.createReview = async (req, res) => {
  try {
    // Validate the request body
    const { error } = validateReview(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const { aiWebsite, websiteUrl, rating, feedback, createdBy } = req.body;

    // Create new review
    const newReview = new Review({ aiWebsite, websiteUrl, rating, feedback, createdBy });
    await newReview.save();

    res.status(201).json({ message: "Review created successfully!", review: newReview });
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

// ✅ Update a review (with validation)
exports.updateReview = async (req, res) => {
  try {
    // Validate updated data
    const { error } = validateReview(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

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
