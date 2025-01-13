const express = require('express')
const posts = express.Router()
const Post = require('../models/post.js')

posts.get('/', (req, res) => {
    res.render('Index', {
        posts: Post,
        title: 'Index Page'
    })
})

// NEW
posts.get('/new', (req, res) => {
    res.render('new')
})

// CREATE
posts.post('/', (req, res) => {
    console.log(req.body)
    // if (!req.body.image) {
    //     req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    // }
    Post.push(req.body)
    res.redirect('/posts')
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

// CREATE
