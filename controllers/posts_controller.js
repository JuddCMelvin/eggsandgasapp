const express = require('express')
const posts = express.Router()
const Post = require('../models/post.js')

posts.get('/', (req, res) => {
    res.render('Index', {
        posts: Post,
        title: 'Index Page'
    })
})

// SHOW
posts.get('/:id', (req, res) => {
    res.send(Post[req.params.id])
})

module.exports = posts

