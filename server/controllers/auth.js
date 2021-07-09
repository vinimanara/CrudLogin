const userModel = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { loginValidation } = require('../utils/fieldsValidation')

module.exports = {
    login: async (req, res) => {
        try {
            const { error } = loginValidation(req.body);
            if (error) return res.status(400).send(error.details[0].message);

            const user = await userModel.findOne({ email: req.body.email });
            if (!user) return res.status(400).send('Email inválido')

            const validPwd = await bcrypt.compare(req.body.password, user.password);
            if (!validPwd) return res.status(400).send('Senha inválida')

            const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
                expiresIn: process.env.expiresInValue //12h
            })
            res.header('auth-token', token).send(token)
        } catch (err) { res.sendStatus(500); console.log(err) }
    }
}
