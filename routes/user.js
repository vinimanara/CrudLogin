const router = require('express').Router()
const bcrypt = require('bcryptjs')

const userModel = require('../models/User')

const {registerValidation} = require('../fieldsValidation')


//CREATE USER
router.post('/', async (req,res) => { 
    const {error} = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    //verify if exists
    const emailExist = await userModel.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send('Email já existente')

    //hash
     const salt = await bcrypt.genSalt()
     const hashPassword = await bcrypt.hash(req.body.password,salt)

    let user =  new userModel({
        name:req.body.name,
        email:req.body.email,
        password:hashPassword
    })
    try{
        savedUser = await user.save()
        res.send({user:user.id})
        console.log(`Success!\n ${savedUser}`)   
    }
    catch(err){
        res.status(400).send(err)
        console.log(`Wrong Request!\n ${user}`)
    }
})

module.exports = router