// src/app.js
const express = require('express');
const questionRoutes = require('./routes/questionRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express(); // Correctly declare the Express app

app.use(express.json());

app.use('/api/questions', questionRoutes);
app.use('/api/questions/:questionId/comments', commentRoutes);

module.exports = app; // Export the app correctly
