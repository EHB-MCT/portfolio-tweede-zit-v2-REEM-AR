const User = require('../models/User');

// Function to create a new user
async function createUser(req, res) {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password, // In a real application, you should hash the password before saving
    });
    res.status(201).json(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
}

// Function to fetch all users
async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
}

module.exports = { createUser, getUsers };
