import React from 'react'

async function getSinglePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
}

const SinglePost = async ({ params }) => {
    const id = { params };
    const singlePost = await getSinglePost(id);
    return (
        <div key={singlePost.id} >
            <h1>{singlePost.title}</h1>
            <p>{singlePost.body}</p>
        </div>
    )
}

export default SinglePost
