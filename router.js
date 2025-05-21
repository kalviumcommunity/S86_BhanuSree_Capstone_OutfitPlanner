const express = require('express');
const router = express.Router();
const { getOutfits } = require('./controller');

router.get('/outfits', getOutfits);

module.exports = router;
