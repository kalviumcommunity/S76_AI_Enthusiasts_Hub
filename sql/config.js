
// sql/config.js - Database configuration
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',          // Change to your MySQL username
  password: process.env.DB_PASSWORD, // Change to your MySQL password
  database: 'ai_reviews_db'
});

module.exports = pool;