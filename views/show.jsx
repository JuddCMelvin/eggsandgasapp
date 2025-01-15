const React = require('react')
const Default = require('./layouts/default')

function Show({ post, index }) {
    console.log(post.name)
    return (
        <Default>
            <h2>Show Page</h2>
            <h2>{post.name}</h2>
            <img src={post.image} alt={post.name} />
            <h3>{post.description}</h3>
            <li><a href='/posts'>go home</a></li>
            <form action={`/posts/${index}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <a href={`/posts/${index}/edit`}><button>Edit</button></a>
        </Default>
    )
}

module.exports = Show
