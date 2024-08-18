const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', userRoutes); // All routes prefixed with /api

module.exports = app;
