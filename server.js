const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const api = require('./server/routes/api')
const app = express()

// mongoose.connect('mongodb://localhost/BabyDB', {useNewUrlParser: true})
const CONNECTION_STRING = 'mongodb://babyShowerUser:12312323zz@ds143666.mlab.com:43666/heroku_fppmgbth'
mongoose.connect(process.env.CONNECTION_STRING || process.env.MONGODB_URI|| 'mongodb://localhost/BabyDB', { useNewUrlParser: true }, (err) => {
    console.log(`DB connected`);
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

const port = process.env.PORT || 3000
// const host = '0.0.0.0'
app.listen(port, function() {
    console.log("Server started.....");
  });
  // app.listen(port, function () {
//     console.log(`Server running on ${port}`)
// })

