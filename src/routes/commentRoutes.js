// src/routes/commentRoutes.js
const express = require('express');
const {
  createComment,
  deleteComment,
} = require('../controllers/commentController');

const router = express.Router({ mergeParams: true });

router.post('/', createComment); // Create a comment
router.delete('/:commentId', deleteComment); // Delete a comment by ID

module.exports = router;
