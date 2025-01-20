// Require needed modules.
// Get the environment variables.
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })



app.use('/posts', require('./controllers/posts_controller'))

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('*', (req,res) => {
    res.render('error404')
})

// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

