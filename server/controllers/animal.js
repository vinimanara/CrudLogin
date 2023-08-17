const animalModel = require('../models/Animal')
const { animalValidation } = require('../utils/fieldsValidation')

module.exports = {
  /* Cadastro de Animais */
  add: async (req, res) => {
    /* Validação dos Campos */
    const { error } = animalValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const animal = new animalModel({
      name: req.body.name,
      type: req.body.type
    })

    try {
      savedAnimal = animal.save()
      res.send({ animal: animal.id })
      console.log(`Animal ${animal.name} saved! Id: ${animal.id}`)
    }
    catch (err) {
      res.status(500).send(err)
      console.log(`Wrong Request! ${animal}`)
    }
  },

  /* Lista todos Animais salvos */
  list: (req, res) => {
    try {
      animalModel.find().then(animals => {
        return res.json(animals)
      }); console.log(`Animals listed successfully`)
    } catch (err) { res.status(500).send(err); console.log(err) }
  }

  
}
