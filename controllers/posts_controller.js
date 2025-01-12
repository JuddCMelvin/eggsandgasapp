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
    if (Post[req.params.id]) {
        res.render('Show', {
            post: Post[req.params.id]
        })
    } else {
        res.send('error404')
    }
})

module.exports = posts

