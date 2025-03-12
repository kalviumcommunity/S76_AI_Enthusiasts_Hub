const express = require('express');
const router = express.Router();
const userController = require('../controller/postcontroller'); 
const reviewsController = require('../controller/reviewcontroller')

// 🛠 User Routes
router.post('/users', userController.createUsers);       // Create a user
router.get('/users', userController.getAllUsers);       // Get all users
router.get('/users/:id', userController.getUserById);   // Get a user by ID
router.put('/users/:id', userController.updateUser);    // Update a user
router.delete('/users/:id', userController.deleteUser); // Delete a user

// ⭐ Review Routes
router.post("/reviews", reviewsController.createReviews);  // Create multiple reviews
router.get("/reviews", reviewsController.getAllReviews);  // Get all reviews
router.get("/reviews/:id", reviewsController.getReviewById);  // Get a single review
router.put("/reviews/:id", reviewsController.updateReview);  // Update a review
router.delete("/reviews/:id", reviewsController.deleteReview);  // Delete a review

module.exports = router;
