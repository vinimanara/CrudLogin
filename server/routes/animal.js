const express = require('express');
const router = express.Router();
const { add, list } = require('../controllers/animal')

router.post('/', add);
router.get('/', list);

module.exports = router
