const express = require('express');
const router = express.Router();
const passport = require('passport');
const { client } = require('../config/database');
const bcrypt = require('bcryptjs');
const authController = require('../controllers/auth.controller');

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;