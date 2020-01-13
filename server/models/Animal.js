const mongoose = require('mongoose')

const animalSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:255
    },
    type:{
        type:String,
        required:true,
        max:255,
        min:2
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Animal', animalSchema)