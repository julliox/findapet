const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    
    password: {
        type: String,
        require: true
    }
})

const user = mongoose.model('user', DataSchema)
module.exports = user;
