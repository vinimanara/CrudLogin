const express = require('express');
const router = express.Router();
const { add, list, listById } = require('../controllers/user')
const verifyToken = require('../middlewares/verifyToken')

router.post('/', add);
router.get('/', verifyToken, list);
router.get('/:id', verifyToken, listById);

module.exports = router
