const jwt = require('jsonwebtoken');
const { User } = require("../database/index")

const auth = async (req, res, next) => {
  const token = req.header('jwt-auth');

  // Check for token
  if (!token)
    return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    // Verify token
    const decoded = await jwt.verify(token, "mysecret");
    const user = await User.findOne({ _id: decoded.id })
    // Add user from payload
    req.user = user;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

// // check current user
const checkUser = async(req, res, next) => {
  const token = req.header('jwt-auth');
  if (token) {
    try {
      // Verify token
      const decoded = await jwt.verify(token, "mysecret");
      const user = await User.findOne({ _id: decoded.id })
      // Add user from payload
      req.user = user;
      next();
    } catch (e) {
      res.status(400).json({ msg: 'Token is not valid' });
    }
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { auth, checkUser };