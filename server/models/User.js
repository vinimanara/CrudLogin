const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

var userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
        unique: true
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6,
        // select: false
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('user', userSchema)
