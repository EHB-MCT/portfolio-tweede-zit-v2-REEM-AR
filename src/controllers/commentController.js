// src/controllers/commentController.js
const Comment = require('../models/Comment');

// Create a new comment
const createComment = async (req, res) => {
    try {
        const { body } = req.body;
        const { questionId } = req.params;

        const comment = await Comment.create({ body, QuestionId: questionId });
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create comment' });
    }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const comment = await Comment.findByPk(commentId);

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        await comment.destroy();
        res.json({ message: 'Comment deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete comment' });
    }
};

module.exports = {
    createComment,
    deleteComment
};
