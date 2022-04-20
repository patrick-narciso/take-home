const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

// Verify Token
const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  // check if bearer is correct
  // eslint-disable-next-line valid-typeof
  const user = 'user@rackspace.com';
  if (bearerHeader === 'f2b0156f-cf95-4e29-9f57-51296a481c6a' && req.body.email === user) {
    // next middleweare
    next();
  } else {
    // Forbidden
    return res.send(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
  }
};

module.exports = auth;
