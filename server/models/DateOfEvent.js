const mongoose = require('mongoose')
const Schema = mongoose.Schema

const dateSchema = new Schema({
    date: String
})
const Date = mongoose.model("Date", dateSchema)

module.exports = Date