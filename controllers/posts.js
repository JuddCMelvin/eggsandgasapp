const express = require('express')
const posts = express.Router()

posts.get('/', (req, res) => {
    res.send('GET /posts')
})

module.exports = posts

