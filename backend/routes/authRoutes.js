// const express = require('express');
// const router = express.Router();
// const authController = require('../controller/authController');
// const auth = require('../middleware/auth');

// // @route   POST /api/auth/signup
// // @desc    Register a user
// // @access  Public
// router.post('/signup', authController.signup);

// // @route   POST /api/auth/login
// // @desc    Login user & get token
// // @access  Public
// router.post('/login', authController.login);

// // @route   GET /api/auth/logout
// // @desc    Logout user & clear cookie
// // @access  Public
// router.get('/logout', authController.logout);

// // @route   GET /api/auth/user
// // @desc    Get current user
// // @access  Private
// router.get('/user', auth, authController.getCurrentUser);

// module.exports = router;