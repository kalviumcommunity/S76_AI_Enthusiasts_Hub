// sql/routes/routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const reviewController = require('../controllers/reviewController');

// User routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);

// Review routes
router.get('/reviews', reviewController.getAllReviews);
router.get('/reviews/:id', reviewController.getReviewById);
router.get('/users/:userId/reviews', reviewController.getReviewsByUser);
router.post('/reviews', reviewController.createReview);

module.exports = router;