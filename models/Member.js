const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema ({
    carmake: String,
    carmodel: String,
    username: String,
    year: Number,
    message: String
})

module.exports = mongoose.model('Member', memberSchema)