const mongoose = require('mongoose')
const Schema = mongoose.Schema

const weatherSchema = new Schema({
    dateXXX: String
})
const Weather = mongoose.model("Weather", weatherSchema)

module.exports = Weather