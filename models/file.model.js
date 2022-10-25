const mongoose = require('mongoose')

const createSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [ true, 'Username is required' ]
    },
    file : {
        type : String
    }
})

const Createmodel = mongoose.model('data', createSchema)

module.exports = Createmodel