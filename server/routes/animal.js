const express = require('express');
const router = express.Router();
const { add } = require('../controllers/animal')
const verifyToken = require('../middlewares/verifyToken')

router.post('/', verifyToken, add);

module.exports = router
