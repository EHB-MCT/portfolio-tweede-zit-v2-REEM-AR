// src/controllers/commentController.js
const Comment = require('../models/Comment');

// Create a new comment for a specific question
const createComment = async (req, res) => {
  try {
    const { body } = req.body;
    const comment = await Comment.create({ body, QuestionId: req.params.questionId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
};

// Get all comments for a specific question
const getCommentsByQuestionId = async (req, res) => {
  try {
    const comments = await Comment.findAll({ where: { QuestionId: req.params.questionId } });
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve comments' });
  }
};

module.exports = {
  createComment,
  getCommentsByQuestionId,
};
