// src/config/db.js
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // The SQLite database file
});

module.exports = sequelize;
