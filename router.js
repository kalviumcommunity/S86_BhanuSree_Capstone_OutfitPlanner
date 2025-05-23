const express = require('express');
const router = express.Router();
const { getOutfits, addOutfit } = require('./controller');

// GET outfits based on weather, activity, timeOfDay
router.get('/outfits', getOutfits);

// POST new outfit
router.post('/outfits', addOutfit);

module.exports = router;
