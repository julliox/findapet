const mongoose = require('mongoose')

const DataSchema = new mongoose.Schema ({
    name: {
        type: String,
        require: true
    },

    meetData: {
        type: String,
        require: true
    },

    location: {
        type: String, 
        require: true
    }
})