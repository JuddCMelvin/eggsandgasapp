const React = require('react')
const Default = require('./layouts/default')

function Show({ post }) {
    console.log(post.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h2>{post.name}</h2>
            <img src={post.image} alt={post.name}/>
            <h3>{post.description}</h3>
            <li><a href='/posts'>go home</a></li>
        </Default> 
    )
}

module.exports = Show
