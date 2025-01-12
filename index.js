// Require needed modules.
// Get the environment variables.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

app.use('/posts', require('./controllers/posts_controller'))

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

