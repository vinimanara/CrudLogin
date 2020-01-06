const jwt = require('jsonwebtoken');
//const { secret } = require('../default');

// module.exports = (data, expiresIn = '12h') => 
//     jwt.sign(
//         data,
//         secret,
//         { expiresIn }
//     );

function unauthorized(res) {
    return res.status(403).send({ message: 'Unauthorized' });
}

module.exports = (req, res, next) => {
    // DESESTRUTURAÇÃO
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