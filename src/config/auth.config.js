module.exports = {
    auth: {
        SECRETKEYJWT: 'bimat',
        JWTARG: 'HS256',
        REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'matma',
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
        AT_EXPIRED_IN: '1h',
        RT_EXPIRED_IN: '2d'
    }
}