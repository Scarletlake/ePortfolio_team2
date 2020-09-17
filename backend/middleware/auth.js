const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from cookies
  const token = req.cookies.Authorization;

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, Authentication failed' });
  }
  
  try {
   
    // Verify token
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.userInfo = decoded;
  
    next();
       
  } catch (err) {
    console.error('Error cheking Auth');
    res.status(401).json({ msg: 'Authentication failed' });
  }
};
