const express = require('express');
const router = express.Router({ mergeParams: true });
const music = require('../controllers/music');

router.get('/', music.findAll);
router.get('/new', music.findAll);
router.get('/featured', music.findFeatured);
router.get('/products/:id', music.findById);
router.get('/:collectionName', music.findCollection);

module.exports = router;