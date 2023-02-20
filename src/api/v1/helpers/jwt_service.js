const jwt = require('jsonwebtoken');

const authConfig = require('../../../config/auth.config');

module.exports = {
    generateAccessToken: (user_id, username) => {
        try {
            console.log('secret', authConfig)
            const token_gen = jwt.sign({ user_id, username }, authConfig.auth.ACCESS_TOKEN_SECRET, {
                algorithm: authConfig.auth.JWTARG,
                expiresIn: authConfig.auth.AT_EXPIRED_IN
            });

            return token_gen
        } catch (error) {
            console.log('Failed sign token:::', error)
        }
    },
    generateRefreshToken: (user_id, username) => {
        try {
            const refresh_token = jwt.sign({ user_id, username }, authConfig.auth.REFRESH_TOKEN_SECRET, {
                algorithm: authConfig.auth.JWTARG,
                expiresIn: authConfig.auth.RT_EXPIRED_IN
            })

            return refresh_token
        } catch (error) {
            console.log('Error sign RT::', error)
        }
    },
}