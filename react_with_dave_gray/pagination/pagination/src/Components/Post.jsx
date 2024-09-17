import React from 'react';

export default function Post({ post }) {
    return (
        <article>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.userId}</p>
        </article>
    );
}
