// Require needed modules.
// Get the environment variables.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

app.use('/posts', require('./controllers/posts_controller'))

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

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

