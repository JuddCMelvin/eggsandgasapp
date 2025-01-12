const express = require('express')
const posts = express.Router()
const Post = require('../models/post.js')

posts.get('/', (req, res) => {
    res.send(Post)
})

// SHOW
posts.get('/:id', (req, res) => {
    res.send(Post[req.params.id])
})

module.exports = posts

