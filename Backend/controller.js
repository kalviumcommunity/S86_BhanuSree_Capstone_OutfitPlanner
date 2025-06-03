const Outfit = require('./models/Outfit');
const User = require('./models/User');    


// GET all outfits with optional filters and populated user data
const getOutfits = async (req, res) => {
  try {
    const { weather, activity, timeOfDay } = req.query;

    const query = {};
    if (weather) query.weather = weather;
    if (activity) query.activity = activity;
    if (timeOfDay) query.timeOfDay = timeOfDay;

    const outfits = await Outfit.find(query).populate('user', 'name email'); // Populate user info

    if (outfits.length === 0) {
      return res.status(404).json({ message: 'No matching outfits found.' });
    }

    res.status(200).json(outfits);
  } catch (error) {
    console.error('Error fetching outfits:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// CREATE a new outfit with user reference
const createOutfit = async (req, res) => {
  try {
    const { weather, activity, timeOfDay, outfitImage, user } = req.body;

    if (!weather || !activity || !timeOfDay || !outfitImage || !user) {
      return res.status(400).json({ message: 'All fields including user are required.' });
    }

    // Check if user exists
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    const newOutfit = new Outfit({ weather, activity, timeOfDay, outfitImage, user });
    await newOutfit.save();

    res.status(201).json(newOutfit);
  } catch (error) {
    console.error('Error creating outfit:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

// UPDATE an existing outfit
const updateOutfit = async (req, res) => {
  try {
    const { id } = req.params;
    const { weather, activity, timeOfDay, outfitImage, user } = req.body;

    const updatedOutfit = await Outfit.findByIdAndUpdate(
      id,
      { weather, activity, timeOfDay, outfitImage, user },
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
