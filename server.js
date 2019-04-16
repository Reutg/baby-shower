const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/citiesDB', { useNewUrlParser: true })


const app = express()

const api = require('./server/routes/api')
app.use('/', api)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


const port = 3000
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})