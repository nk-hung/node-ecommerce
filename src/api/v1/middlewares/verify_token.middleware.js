const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const { auth } = require('../../../config/auth.config');

module.exports = {
  verifyToken: (req, res, next) => {
    let authHeader = req.headers['authorization'];
    console.log('req', req.headers);
    if (!authHeader) {
      return next(createError.Forbidden('Unauthorized!'));
    }

    const bearerToken = authHeader.split(' ');
    const token = bearerToken[1];
    console.log('bearerToken', token);

    jwt.verify(
      token,
      auth.ACCESS_TOKEN_SECRET,
      {
        algorithms: auth.JWTARG,
        expiresIn: auth.AT_EXPIRED_IN,
      },
      (err, payload) => {
        if (err) {
          console.log('err', err);
          return next(createError.Unauthorized, 'Có lỗi trong quá trình!');
        }
        console.log('payload', payload);
        req.username = payload.username;
        req.user_id = payload.user_id;

        next();
      }
    );
  },
};
