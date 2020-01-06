const router = require('express').Router()
const userModel = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { loginValidation } = require('../fieldsValidation')

router.post('/', async (req, res) => {
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await userModel.findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email inválido')

    let validPwd = await bcrypt.compare(req.body.password, user.password)
    if (!validPwd) return res.status(400).send('Senha inválida')

    const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
        expiresIn: '12h'
    })
    res.header('auth-token', token).send(token)
})

module.exports = router 