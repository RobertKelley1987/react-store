const express = require('express');
const router = express.Router({ mergeParams: true });
const apparel = require('../controllers/apparel');

router.get('/', apparel.findAll);
router.get('/new', apparel.findAll);
router.get('/featured', apparel.findFeatured);
router.get('/products/:id', apparel.findById);
router.get('/:collectionName', apparel.findCollection);

module.exports = router;