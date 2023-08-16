const express = require('express');
const router = express.Router();
const { add, list, listById, update, remove } = require('../controllers/user')
const verifyToken = require('../middlewares/verifyToken')

router.post('/', add);
router.get('/', list);
router.get('/:id', verifyToken, listById);
router.put('/:id', verifyToken, update);
router.delete('/:id', verifyToken, remove);

module.exports = router
