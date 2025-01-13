const React = require('react')
const Default = require('./layouts/default')

function New() {
    return (
        <Default>
            <h2>Add a new Post</h2>
            <form action="/posts" method="POST">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="url"
                    name="image"
                    id="image" />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                />
                <br />
                <input type="submit" />
            </form>
            <div className="backButton">
                <a href="/posts"><button>Go back to the index</button></a>
            </div>
        </Default>
    )
}

module.exports = New
