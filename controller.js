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

const createOutfit = async (req, res) => {
  try {
    const { weather, activity, timeOfDay, outfitImage } = req.body;
    if (!weather || !activity || !timeOfDay || !outfitImage) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    const newOutfit = new Outfit({ weather, activity, timeOfDay, outfitImage });
    await newOutfit.save();
    res.status(201).json(newOutfit);
  } catch (error) {
    console.error('Error creating outfit:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateOutfit = async (req, res) => {
  try {
    const { id } = req.params;
    const { weather, activity, timeOfDay, outfitImage } = req.body;

    const updatedOutfit = await Outfit.findByIdAndUpdate(
      id,
      { weather, activity, timeOfDay, outfitImage },
      { new: true, runValidators: true }
    );

    if (!updatedOutfit) {
      return res.status(404).json({ message: 'Outfit not found.' });
    }

    res.status(200).json(updatedOutfit);
  } catch (error) {
    console.error('Error updating outfit:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getOutfits, createOutfit, updateOutfit };