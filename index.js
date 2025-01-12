// Require needed modules.
// Get the environment variables.
require('dotenv').config()
const express = require('express')

// Initialize the app object.
const app = express()

// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Color Page
app.get('/:color', function (req, res) {
    let myColor = req.params.color
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: ${myColor};">${myColor} Page</h1>
        </body>
    `)
})

app.post('/:color', (req, res) => {
    res.send('Hello world')
})

app.get('*', (req,res) => {
    res.status(404).send('<h1>404 Page</h1>')
})
// Listen for connections.
app.listen(process.env.PORT, function () {
    console.log('I am awake!')
})

