const mongoose = require('mongoose');

const outfitSchema = new mongoose.Schema({
  weather: {
    type: String,
    required: true,
  },
  activity: {
    type: String,
    required: true,
  },
  timeOfDay: {
    type: String,
    required: true,
  },
  outfitImage: {
    type: String,
    required: true,
  },
  user: {   
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Outfit', outfitSchema);
