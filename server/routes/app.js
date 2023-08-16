const express = require('express');
const users = require('./user');
const animals = require('./animal');
const verifyToken = require('../middlewares/verifyToken')
const { login } = require('../controllers/auth');

const router = express.Router();

router.post('/auth', login);
router.use('/users', verifyToken, users);
router.use('/animals', verifyToken, animals);

module.exports = router