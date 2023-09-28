const express = require('express');
const router = express.Router({ mergeParams: true });
const artists = require('../controllers/artists');

router.get('/:name', artists.findByName);

module.exports = router