// backend/routes/routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controller/postcontroller');
const reviewsController = require('../controller/reviewcontroller');
const authController = require('../controller/authController');
const { protect, admin } = require('../middleware/auth');

// Auth Routes
router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/auth/me', protect, authController.getCurrentUser);

// 🛠 User Routes - Protected with admin role
router.post('/users', protect, admin, userController.createUsers);
router.get('/users', protect, admin, userController.getAllUsers);
router.get('/users/:id', protect, userController.getUserById);
router.put('/users/:id', protect, userController.updateUser);
router.delete('/users/:id', protect, admin, userController.deleteUser);

// ⭐ Review Routes - Some protected
router.post("/reviews", protect, reviewsController.createReview);
router.get("/reviews", reviewsController.getAllReviews);
router.get("/reviews/:id", reviewsController.getReviewById);
router.put("/reviews/:id", protect, reviewsController.updateReview);
router.delete("/reviews/:id", protect, reviewsController.deleteReview);

module.exports = router;