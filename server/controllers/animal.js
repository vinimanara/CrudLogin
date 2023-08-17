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
  },

  /* Lista por ID */
  listById: async (req, res) => {
    try {
      await animalModel.findById(req.params.id).then(animal => {
        if (animal) {
          res.json(animal)
        } else {
          res.status(404).send(`Pet não cadastrado`)
        }
      });
    } catch (err) { res.status(500).send(`ID inválido`); console.log(err) }
  },

  /* Remove Pet */
  remove: async (req, res) => {
    try {
      await animalModel.findByIdAndRemove({ _id: req.params.id }).then(animal => {
        if (animal) {
          res.status(200).send(`Pet removido com sucesso`)
        } else {
          res.status(404).send(`Pet não encontrado`)
        }
      })
    } catch (err) { res.status(500).send(`ID inválido`); console.log(err) }
  },

  /* Atualiza Pet */
  update: async (req, res) => {
    //Validação dos Campos
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    try {
      await animalModel.findByIdAndUpdate({ _id: req.params.id }, req.body).then((user) => {
        if (user) {
          animalModel.findOne({ _id: req.params.id })
            .then(animalModel => res.send(animalModel))
        } else {
          res.status(404).send(`Pet não Encontrado`)
        }
      });
    } catch (err) { res.status(500).send(`ID inválido`); console.log(err) }
  }

}
