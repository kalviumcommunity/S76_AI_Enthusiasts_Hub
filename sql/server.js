// sql/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const pool = require('./config');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Health check endpoint
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Database connection test
app.get('/', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.json({ message: 'Connected to MySQL database' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`SQL Server running at http://localhost:${port}`);
});