const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  aiWebsite: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  feedback: { type: String, required: true },
  createdBy: { type: String, required: true } // Username of the reviewer
}, { timestamps: true });

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
