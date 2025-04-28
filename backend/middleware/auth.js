// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/postschema'); // Adjust the path as necessary
const bcrypt = require('bcryptjs');
require('dotenv').config();
exports.protect = async (req, res, next) => {
  try {
    let token=req.cookies.token;

    // Check if token exists in headers
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // If no token found
    if (!token) {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }
    try {
      console.log(process.env.JWT_SECRET)
      // Verify token
      console.log(token)
      const decoded = jwt.verify(token, "ai_hub_secure_jwt_secret_key_2025");
      
      // Attach user to request
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Middleware to check if user has admin role
exports.admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ message: 'Not authorized as admin' });
  }
};