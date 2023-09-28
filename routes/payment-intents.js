const express = require('express');
const router = express.Router({ mergeParams: true });
const paymentIntents = require('../controllers/payment-intents');

router.post('/', paymentIntents.create);

module.exports = router;