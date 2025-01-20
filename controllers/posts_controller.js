const express = require('express')
const posts = express.Router()
// const Post = require('../models/post.js')
const db = require('../models')

posts.get('/', (req, res) => {
    db.Post.find()
        .then(foundPost => {
            res.render('index', {
                posts: foundPost,
                title: 'Index Page'
            })
        })
    // res.render('Index', {
    //     posts: Post,
    //     title: 'Index Page'
    // })
})

// NEW
posts.get('/new', (req, res) => {
    res.render('new')
})

// CREATE
posts.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.image) {
        req.body.image = undefined
    }
    db.create(req.body)
    res.redirect('/posts')
    // if (!req.body.image) {
    //     req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    // }
    // Post.push(req.body)
    // res.redirect('/posts')
})

// EDIT
posts.get('/:id/edit', (req, res) => {
    res.render('edit', {
        posts: Post[req.params.id],
        index: req.params.id
    })
})

// SHOW
posts.get('/:id', (req, res) => {
    db.Post.findById(req.params.id)
        .then(foundPost => {
            res.render('show', {
                post: foundPost
        })
    })
    .catch(err => {
        res.send('404', err)
    })
})
     // if (Post[req.params.id]) {
    //     res.render('Show', {
    //         post: Post[req.params.id],
    //         index: req.params.id,
    //     })
    // } else {
    //     res.render('error404')
    // }


// UPDATE
posts.put('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!Post[id]) {
        res.render('error404')
    }
    else {
        if(!req.body.image){
            req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
        }
        Post[req.params.id] = req.body
        res.redirect(`/posts/${id}`)
    }
//   })
    // Post[req.params.id] = req.body
    // res.redirect(`/posts/${req.params.id}`)
})

// DELETE
posts.delete('/:id', (req, res) => {
    db.Post.findByIdAndDelete(req.params.id)
        .then(deletePost => {
            res.status(303).redirect('/posts')
        })
})

module.exports = posts

