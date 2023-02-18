const jwt = require('jsonwebtoken');
const { auth } = require('../../../config/auth.config');

module.exports = {
    verifyToken: (req, res, next) => {
        try {
            let token = req.headers["x-access-token"];

            if (!token) {
                return res.status(403).send({ message: 'No Token provided!' })
            }

            const decoded = jwt.verify(token, auth.SECRETKEYJWT, {
                algorithms: auth.JWTARG,
                expiresIn: auth.EXPIRED_IN
            })

            req.username = decoded.username;
            req.user_id = decoded.user_id;

            next();
        } catch (error) {
            return res.status(401).send({
                message: 'Unauthorized!'
            })
        }
    }
}