const Joi = require('@hapi/joi')

//Register Validations

const registerValidation = (data) =>{
    const schema = Joi.object({ 
        name: Joi.string() 
        .min(2)
        .required(),
        
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        
        password: Joi.string()
        .min(6)
        .required()
    })

    return schema.validate(data)
};


const loginValidation = (data) =>{
    const schema = Joi.object({ 
        email: Joi.string()
        .min(6)
        .required()
        .email(),
        
        password: Joi.string()
        .min(6)
        .required()
    })

    return schema.validate(data)
};

const animalValidation = (data) =>{
    const schema = Joi.object({ 
        name: Joi.string() 
        .min(2)
        .required(),
        
        type: Joi.string()
        .min(2)
        .required()
    })

    return schema.validate(data)
};

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation
module.exports.animalValidation = animalValidation
