const jwt = require('jsonwebtoken');
const { secret } = require('../default');

module.exports = (data, expiresIn = '12h') => 
    jwt.sign(
        data,
        secret,
        { expiresIn }
    );