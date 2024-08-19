const express = require('express');
const { createUser, getUsers } = require('../controllers/UserController');

const router = express.Router();

// Route to create a new user
router.post('/users', createUser);

// Route to get all users
router.get('/users', getUsers);

module.exports = router;
