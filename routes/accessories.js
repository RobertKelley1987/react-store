const express = require('express');
const router = express.Router({ mergeParams: true });
const accessories = require('../controllers/accessories');

router.get('/', accessories.findAll);
router.get('/new', accessories.findAll);
router.get('/products/:id', accessories.findById);
router.get('/:collectionName', accessories.findCollection);

module.exports = router;