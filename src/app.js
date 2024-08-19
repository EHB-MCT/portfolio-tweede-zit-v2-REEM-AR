// src/app.js
const express = require('express');
const path = require('path');
const questionRoutes = require('./routes/questionRoutes');

const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());

app.use('/api/questions', questionRoutes);

module.exports = app;
