const jwt = require('jsonwebtoken');
const config = require('../config');

const validations = {
    isAuthorized: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const tokenDecoded = jwt.verify(token, config.jwtSecret);
            if (tokenDecoded) {
                req.user = {
                    username: tokenDecoded.username,
                    isAdmin: tokenDecoded.isAdmin
                }
                next()
            }
        } catch (err) {
            res.status(401).json({
                isSucces: false,
                error: 'No se reconoce el usuario'
            });
        }
    },
    isAdmin: (req, res, next) => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(401).json({
                isSucces: false,
                error: "El usuario no es admin"
            })
        }
    }
}

module.exports = validations