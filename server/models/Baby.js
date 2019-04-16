const mongoose = require('mongoose')
const Schema = mongoose.Schema

const babySchema = new Schema({
    name: String,
    gender: String,
    rank: Boolean,
})
const Baby = mongoose.model("Baby", babySchema)

module.exports = Baby