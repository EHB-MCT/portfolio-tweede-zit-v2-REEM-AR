// src/routes/commentRoutes.js
const express = require('express');
const {
  createComment,
  getCommentsByQuestionId,
} = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

router.post('/', createComment); // Create a comment for a specific question
router.get('/', getCommentsByQuestionId); // Get all comments for a specific question

module.exports = router;
