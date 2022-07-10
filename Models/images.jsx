const mongoose = require('mongoose')

let imageSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:Number,
    text:String
})