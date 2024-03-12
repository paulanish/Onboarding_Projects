const express = require('express');
const authController = require('../controller/auth.controller');
const router = express.Router();

// Registration route
router.post('/register', authController.registerUser);

module.exports = router;
