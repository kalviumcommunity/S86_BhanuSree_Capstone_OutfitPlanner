const express = require('express');
const router = express.Router();
const { getOutfits, createOutfit, updateOutfit } = require('./controller');

router.get('/outfits', getOutfits);
router.post('/outfits', createOutfit);
router.put('/outfits/:id', updateOutfit);

module.exports = router;
