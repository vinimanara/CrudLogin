const express = require('express');
const users = require('./user');
const { login } = require('../controllers/auth');

const router = express.Router();

router.post('/auth', login);
router.use('/users', users);

module.exports = router