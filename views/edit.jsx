const React = require('react')
const Default = require('./layouts/default')

function Edit({ posts, index }) {
    return (
        <Default>
            <h2>Edit a post</h2>
            <form action={`/posts/${index}?_method=PUT`} method="POST">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    defaultValue={posts.title}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image"
                    defaultValue={posts.image}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    defaultValue={posts.description}
                />
                <br />
                <input type="submit" />
            </form>
        </Default>
    )
}

module.exports = Edit
