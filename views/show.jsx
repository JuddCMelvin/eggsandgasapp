const React = require('react')
const Default = require('./layouts/default')

function Show({ post, index }) {
    return (
        <Default>
            <h2>Show Page</h2>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.name} />
            <h3>{post.description}</h3>
            <li><a href='/posts'>go home</a></li>
            <form action={`/posts/${post._id}?_method=DELETE`} method="POST">
                <input type='submit' value="DELETE" />
            </form>
            <a href={`/posts/${post.id}/edit`}><button>Edit</button></a>
        </Default>
    )
}

module.exports = Show
