-- sql/schema.sql - Database schema

-- Create database
CREATE DATABASE IF NOT EXISTS ai_reviews_db;
USE ai_reviews_db;

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reviews table with foreign key to users
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ai_website VARCHAR(100) NOT NULL,
  website_url VARCHAR(255) NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  feedback TEXT NOT NULL,
  created_by INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

-- Seed data: Insert users
INSERT INTO users (username, email, password, role) VALUES
('tech_enthusiast', 'tech@example.com', 'hashed_password', 'user'),
('ai_researcher', 'researcher@example.com', 'hashed_password', 'admin'),
('daily_user', 'user@example.com', 'hashed_password', 'user');

-- Seed data: Insert reviews
INSERT INTO reviews (ai_website, website_url, rating, feedback, created_by) VALUES
('ChatGPT', 'https://chat.openai.com', 4, 'Excellent AI assistant with strong language capabilities. Sometimes provides overly cautious responses.', 1),
('Claude', 'https://claude.ai', 5, 'Impressive reasoning abilities and nuanced responses. Handles complex questions very well.', 2),
('Bard', 'https://bard.google.com', 3, 'Good for factual information but sometimes provides inconsistent answers.', 3),
('Perplexity', 'https://perplexity.ai', 4, 'Great search capabilities and citation features. Interface could use some improvements.', 1),
('Copilot', 'https://copilot.microsoft.com', 4, 'Excellent integration with Microsoft products. Very useful for productivity tasks.', 2),
('Anthropic', 'https://anthropic.com', 5, 'Amazing AI models with strong safety features. Their constitutional approach is impressive.', 3),
('HuggingChat', 'https://huggingface.co/chat', 3, 'Open source alternative with decent performance. Occasionally gives technical errors.', 1),
('ChatGPT', 'https://chat.openai.com', 2, 'Recent updates have decreased the quality of responses. Used to be better.', 2),
('Claude', 'https://claude.ai', 4, 'Thoughtful responses with good context handling. API could be more flexible.', 3),
('Pi', 'https://heypi.com', 3, 'Very conversational but sometimes goes off-topic. Good for casual chats.', 1);