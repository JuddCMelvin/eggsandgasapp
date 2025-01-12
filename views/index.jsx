const React = require('react')
const Default = require('./layouts/default')

function Index({posts}) {
    return (
        <Default>
            <h2>Index Page</h2>
            {/* <p>I have {posts[0].title}</p> */}
            <ul>
                {
                    posts.map((post, index) => {
                        return(<li key={index}>
                            <a href={`/posts/${index}`}>
                                {post.title}
                            </a>
                        </li>)
                    })
                }
            </ul>
        </Default>
    )
}

module.exports = Index
