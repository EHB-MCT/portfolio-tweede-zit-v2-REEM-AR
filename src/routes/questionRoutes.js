// src/routes/questionRoutes.js
const express = require('express');
const {
  createQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestion,
} = require('../controllers/questionController');

const router = express.Router();

router.post('/', createQuestion); // Create a question
router.get('/', getQuestions); // Get all questions
router.get('/:id', getQuestionById); // Get a specific question by ID
router.delete('/:id', deleteQuestion); // Delete a question by ID

module.exports = router;
