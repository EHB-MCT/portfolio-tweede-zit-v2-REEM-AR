// src/models/Comment.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Question = require('./Question');

const Comment = sequelize.define('Comment', {
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

Question.hasMany(Comment);
Comment.belongsTo(Question);

module.exports = Comment;
