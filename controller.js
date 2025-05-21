const Outfit = require('./schema');

const getOutfits = async (req, res) => {
  try {
    const { weather, activity, timeOfDay } = req.query;

    const query = {};
    if (weather) query.weather = weather;
    if (activity) query.activity = activity;
    if (timeOfDay) query.timeOfDay = timeOfDay;

    const outfits = await Outfit.find(query);

    if (outfits.length === 0) {
      return res.status(404).json({ message: 'No matching outfits found.' });
    }

    res.status(200).json(outfits);
  } catch (error) {
    console.error('Error fetching outfits:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getOutfits };
