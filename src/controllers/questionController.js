// src/controllers/questionController.js
const Question = require('../models/Question');

// Create a new question
const createQuestion = async (req, res) => {
  try {
    const { title, body } = req.body;
    const question = await Question.create({ title, body });
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create question' });
  }
};

// Get all questions
const getQuestions = async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.status(200).json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve questions' });
  }
};

// Get a specific question by ID
const getQuestionById = async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);
    if (question) {
      res.status(200).json(question);
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve question' });
  }
};

// Delete a question by ID
const deleteQuestion = async (req, res) => {
  try {
    const result = await Question.destroy({ where: { id: req.params.id } });
    if (result) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete question' });
  }
};

module.exports = {
  createQuestion,
  getQuestions,
  getQuestionById,
  deleteQuestion,
};
