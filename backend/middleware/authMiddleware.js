const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) {
      return res.status(401).json({ success:false, message: 'No token provided' });
    }
    const token = auth.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    // attach user
    req.user = { id: decoded.id, name: decoded.name };
    // optionally fetch user from DB
    // req.userDoc = await User.findById(decoded.id);
    next();
  } catch (err) {
    console.error('Auth error', err.message);
    res.status(401).json({ success:false, message: 'Unauthorized' });
  }
};
