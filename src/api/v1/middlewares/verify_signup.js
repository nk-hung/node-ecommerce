const db = require('../models/mysql');
const { ROLES } = require('../shared/constants');

module.exports = {
    checkDuplicateInfo: async (req, res, next) => {
        const existUsernamePromise = db.e_user.findOne({
            where: { username: req.body.username }
        })

        const existEmailPromise = db.e_user.findOne({
            where: { email: req.body.email }
        })

        const existMobilePromise = db.e_user.findOne({
            where: { mobile: req.body.mobile }
        })
        const [existUsername, existEmail, existMobile] = await Promise.all([existUsernamePromise, existEmailPromise, existMobilePromise])

        if (existUsername) {
            return res.status(400).send({ message: 'Username is already in use' })
        }

        if (existEmail) {
            return res.status(400).send({ message: 'Email is already in use' })
        }

        if (existMobile) {
            return res.status(400).send({ message: 'Mobile is already in use' })
        }
        next();
    },

    checkRolesExisted: (req, res, next) => {
        const { roles } = req.body
        if (roles) {
            for (let i = 0; i < roles.lenght; i++) {
                if (!ROLES.includes(roles[i])) {
                    return res.status(400).send({ message: 'Failed! Role does not exist!' })
                }
            }
        }
        next()
    }

}