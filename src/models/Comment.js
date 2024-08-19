// src/models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Comment = sequelize.define('Comment', {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Comment;
