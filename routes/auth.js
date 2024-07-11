const express = require('express');
const router = express.Router();
const { register, login, forgotPassword } = require('../controllers/authController');

// Register
router.post('/register', register);

// Login
router.post('/login', login);

// Forgot Password
router.post('/forgot-password', forgotPassword);

module.exports = router;
