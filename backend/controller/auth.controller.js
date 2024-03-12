const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const DB = require('../models/model.js');


const User = DB.USER;
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validate input using express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Check if the username is already taken
    const existingUser = await User.findOne({ where:  {username}  });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const user = await User.create({ username, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { registerUser };
