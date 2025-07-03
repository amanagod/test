const jwt = require('jsonwebtoken');

const SECRET = '123456789@Nishant';

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer '))
    return res.status(401).json({ message: 'Unauthorized' });

  try {
    const token = authHeader.split(' ')[1];
    const user = jwt.verify(token, SECRET);
    req.user = user;
    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports.SECRET = SECRET;
