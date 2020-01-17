const express = require('express');
const router = express.Router();
const { add } = require('../controllers/animal')

router.post('/', add);

module.exports = router
