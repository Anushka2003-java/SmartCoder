const User = require('../models/User');
const generateToken = require('../utils/generateToken');

exports.guestLogin = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ success:false, message: 'Name required' });

    // create or find existing simple user by name (for demo)
    let user = await User.findOne({ name });
    if (!user) {
      user = await User.create({ name });
    }

    const token = generateToken({ id: user._id, name: user.name });
    res.json({ success: true, data: { token, name: user.name, id: user._id } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success:false, message: 'Server error' });
  }
};
