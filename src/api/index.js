const express = require('express');

const thingspeak = require('./thingspeak');

const router = express.Router();

router.use('/thingspeak', thingspeak);

module.exports = router;
