const mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    page: String,
    encodedImage: String
})

module.exports = mongoose.model('image', imageSchema);