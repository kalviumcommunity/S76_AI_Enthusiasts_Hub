require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/routes');
const authRoutes = require('./routes/authRoutes'); // Add this missing import

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

// Simple health check route
app.get('/ping', (req, res) => {
  res.send('Pong!');
});

// Use routes
app.use('/api', userRoutes);
// app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.db_url)
  .then(() => {
    console.log('MongoDB Connected');
    // Only start server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit on DB connection failure
  });

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}