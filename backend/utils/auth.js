const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

const setTokenCookie = (res, user) => {
    // create token
    const token = jwt.sign(
        { data: user.toSafeObject() },
        secret,
        { expiresIn: parseInt(expiresIn) },
        );

        const isProduction = process.env.NODE_ENV === 'production';

        // set the JWT cookie after a user is logged in or signed up
    res.cookie('token', token, {
        maxAge: expiresIn * 1000,
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax",
    });
    return token;
};

const restoreUser = (req, res, next) => {
    // restore the session user based on the contents of the JWT cookie
    const { token } = req.cookies;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {

        if (err) {
            return next();
        }

        try {
            const { id } = jwtPayload.data;
            req.user = await User.scope('currentUser').findByPk(id);
        }

        catch (e) {
            res.clearCookie('token');
            return next();
        }

        if (!req.user) res.clearCookie('token');
        return next();
    });
};

const requireAuth = [
    // require a session user to be authenticated before accessing a route
    restoreUser,

    function (req, res, next) {

        if (req.user) return next();

        const err = new Error('Unauthorized');
        err.title = 'Unauthorized';
        err.errors = ['Unauthorized'];
        err.status = 401;

        return next(err);
    },
];

module.exports = { setTokenCookie, restoreUser, requireAuth };