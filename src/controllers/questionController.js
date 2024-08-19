// src/controllers/questionController.js
const Question = require('../models/Question');
const Comment = require('../models/Comment');

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
        const questions = await Question.findAll({
            include: [{ model: Comment }] // Include comments with each question
        });
        res.json(questions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch questions' });
    }
};

// Get a specific question by ID
const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id, {
            include: [{ model: Comment }]
        });

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        res.json(question);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch question' });
    }
};

// Delete a question by ID
const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const question = await Question.findByPk(id);

        if (!question) {
            return res.status(404).json({ error: 'Question not found' });
        }

        await question.destroy();
        res.json({ message: 'Question deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete question' });
    }
};

module.exports = {
    createQuestion,
    getQuestions,
    getQuestionById,
    deleteQuestion
};
