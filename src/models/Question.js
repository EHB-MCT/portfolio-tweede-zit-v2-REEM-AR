// src/models/Question.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Comment = require('./Comment');

const Question = sequelize.define('Question', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

Question.hasMany(Comment, { onDelete: 'CASCADE' });
Comment.belongsTo(Question);

module.exports = Question;
