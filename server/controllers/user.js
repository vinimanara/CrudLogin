const bcrypt = require('bcryptjs')
const userModel = require('../models/User')
const { registerValidation } = require('../utils/fieldsValidation')

module.exports = {

    /* Adiciona Usuário */
    add: async (req, res) => {

        //Validação dos Campos
        const { error } = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        //Verifica se o e-mail existe
        const emailExist = await userModel.findOne({ email: req.body.email })
        if (emailExist) return res.status(400).send('E-mail já cadastrado =)')

        //Gera senha em Hash
        const salt = await bcrypt.genSalt()
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        })

        try {
            savedUser = user.save()
            res.send({ user: user.id }); console.log(`User inserted - Id: ${user.id}`)
        } catch (err) { res.status(400).send(err) }
    },

    /* Lista todos usuários */
    list: (req, res) => {
        try {
            userModel.find().then(users => {
                return res.json(users)
            }); console.log(`Users listed successfully`)
        } catch (err) { res.status(500).send(err); console.log(err) }
    },

    /* Lista por ID */
    listById: async (req, res) => {
        try {
            await userModel.findById(req.params.id).then(user => {
                if (user) {
                    res.json(user)
                } else {
                    res.status(404).send(`Usuário não Encontrado`)
                }
            });
        } catch (err) { res.status(503).send(`ID inválido`); console.log(err) }
    },

    /* Remove Usuário */
    remove: async (req, res) => {
        try {
            await userModel.findByIdAndRemove({ _id: req.params.id }).then(user => {
                if (user) {
                    res.status(200).send(`Usuário removido com sucesso`)
                } else {
                    res.status(404).send(`Usuário não Encontrado`)
                }
            })
        } catch (err) { res.status(503).send(`ID inválido`); console.log(err) }
    },

    /* Atualiza Usuário */
    update: async (req, res) => {
        //Validação dos Campos
        const { error } = registerValidation(req.body)
        if (error) return res.status(400).send(error.details[0].message)

        try {
            await userModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
                if (user) {
                    userModel.findOne({ _id: req.params.id })
                        .then(userModel => res.send(userModel))
                } else {
                    res.status(404).send(`Usuário não Encontrado`)
                }
            });
        } catch (err) { res.status(503).send(`ID inválido`); console.log(err) }
    }
};