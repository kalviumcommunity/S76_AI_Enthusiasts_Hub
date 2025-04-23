// sql/controllers/reviewController.js
const pool = require('../config');


// Get all reviews with dummy data
exports.getAllReviews = async (req, res) => {
    try {
      // Dummy data for testing
      const dummyReviews = [
        {
          id: 1,
          ai_website: "ChatGPT",
          website_url: "https://chat.openai.com",
          rating: 5,
          feedback: "Amazing AI assistant!",
          created_by: "tech_enthusiast",
          created_at: "2023-10-01T12:00:00Z",
        },
        {
          id: 2,
          ai_website: "Claude",
          website_url: "https://claude.ai",
          rating: 4,
          feedback: "Great reasoning capabilities.",
          created_by: "ai_researcher",
          created_at: "2023-10-02T12:00:00Z",
        },
      ];
  
      res.status(200).json(dummyReviews);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
// Get a single review by ID
exports.getReviewById = async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT r.*, u.username 
      FROM reviews r
      JOIN users u ON r.created_by = u.id
      WHERE r.id = ?
    `, [req.params.id]);
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get reviews by user ID
exports.getReviewsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const [rows] = await pool.query(`
      SELECT r.*, u.username 
      FROM reviews r
      JOIN users u ON r.created_by = u.id
      WHERE r.created_by = ?
      ORDER BY r.created_at DESC
    `, [userId]);
    
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new review
exports.createReview = async (req, res) => {
  try {
    const { ai_website, website_url, rating, feedback, created_by } = req.body;
    
    // Validate input
    if (!ai_website || !website_url || !rating || !feedback || !created_by) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    // Insert review into database
    const [result] = await pool.query(`
      INSERT INTO reviews (ai_website, website_url, rating, feedback, created_by) 
      VALUES (?, ?, ?, ?, ?)
    `, [ai_website, website_url, rating, feedback, created_by]);
    
    // Get the inserted review with user info
    const [newReview] = await pool.query(`
      SELECT r.*, u.username 
      FROM reviews r
      JOIN users u ON r.created_by = u.id
      WHERE r.id = ?
    `, [result.insertId]);
    
    res.status(201).json({ message: 'Review created successfully', review: newReview[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};