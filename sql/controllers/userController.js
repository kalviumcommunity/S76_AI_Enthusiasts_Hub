// sql/controllers/userController.js
const pool = require('../config');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT id, username, email, role, created_at FROM users');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user by ID
exports.getUserById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      'SELECT id, username, email, role, created_at FROM users WHERE id = ?', 
      [req.params.id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};