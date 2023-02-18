const jwt = require('jsonwebtoken');
const authConfig = require('../../../config/auth.config');

module.exports = {
    generateToken: (user_id, username) => {
        try {
            console.log('secret', authConfig)
            const token_gen = jwt.sign({ user_id, username }, authConfig.auth.SECRETKEYJWT, {
                algorithm: authConfig.auth.JWTARG,
                expiresIn: authConfig.auth.EXPIRED_IN
            });

            return token_gen
        } catch (error) {
            console.log('Failed sign token:::', error)
        }
    }
}