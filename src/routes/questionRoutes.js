// src/routes/questionRoutes.js
const express = require('express');
const {
  createQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestion,
} = require('../controllers/questionController');
const commentRoutes = require('./commentRoutes');

const router = express.Router();

router.post('/', createQuestion); // Create a question
router.get('/', getQuestions); // Get all questions
router.get('/:id', getQuestionById); // Get a specific question by ID
router.delete('/:id', deleteQuestion); // Delete a question by ID

// Use comment routes for handling comments on specific questions
router.use('/:questionId/comments', commentRoutes);

module.exports = router;
