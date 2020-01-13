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
            res.send({ user: user.id })
            console.log(`User inserted - Id: ${user.id}`)
        }
        catch (err) {
            res.status(400).send(err)
            console.log(`Woops, something didn't work!`)
        }
    },

    /* Lista todos usuários */
    list: (req, res) => {
        const user = new userModel({});
        try {
            user.find({}).exec(function (err, docs) {
                if (err) {
                    res.send('error has ocurred')
                }
                else { console.log(docs); res.json(docs) }
            })
        }
        catch (err) {
            res.status(500).send(err); console.log(`deu ruim ${err}\n USER -> ${user})}`)
        }
    }
};