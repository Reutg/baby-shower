const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
    task: String,
    checked: Boolean
    // cost: Number
})
const Task = mongoose.model("Task", taskSchema)

module.exports = Task