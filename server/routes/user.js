const express = require('express');
const router = express.Router();
const { add, list } = require('../controllers/user')
const verifyToken = require('../middlewares/verifyToken')

router.post('/', verifyToken, add);
router.get('/', list);

module.exports = router
