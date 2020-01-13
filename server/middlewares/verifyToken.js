const jwt = require('jsonwebtoken');

function unauthorized(res) {
    return res.status(403).send({ message: 'Unauthorized' });
}

module.exports = (req, res, next) => {

    const { authorization } = req.headers;
    let parts, token;

    if (!authorization)
        return unauthorized(res);

    parts = authorization.split(' ');

    if (parts[0] !== 'Bearer' || parts.length !== 2)
        return unauthorized(res);

    token = parts[1];

    jwt.verify(token, process.env.SECRET, (error, payload) => {
        if (error) unauthorized(res);
        else next();
    });
}