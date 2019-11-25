const router = require('express').Router()
const animalModel = require('../models/Animal')

const {animalValidation} = require('../fieldsValidation')

//REGISTER ANIMAL
router.post('/animal', async (req,res) => {    
    
    const {error} = animalValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)
    
    //VALIDATE TOKEN
    var token = getToken(req.headers);
    if(token){
    
        let animal =  new animalModel({
            name:req.body.name,
            type:req.body.type
        })
        try{
            savedAnimal = await animal.save()
            res.send({animal:animal.id})
            console.log(`Success!\n ${savedAnimal}`)   
        }
        catch(err){
            res.status(400).send(err)
            console.log(`Wrong Request!\n ${animal}`)
        }
    }else{
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
}
})


getToken = function (headers) {

    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };


module.exports = router