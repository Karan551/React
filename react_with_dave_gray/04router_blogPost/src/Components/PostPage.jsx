import React from 'react';
import { useParams, Link, useOutletContext } from 'react-router-dom';

const PostPage = () => {
    const { id } = useParams();
    const { posts, handleDelete } = useOutletContext();
    const post = posts.find((eachPost) => eachPost.id == id);

    return (
        <main className="PostPage">
            <article className="post">{
                post &&
                <>
                    <h2>{post.title}</h2>
                    <p className="postDate">
                        {post.datetime}
                    </p>
                    <p className="postBody">
                        {post.body}
                    </p>

                    <button type="button" onClick={() => handleDelete(post.id)} >Delete Post</button>
                    <Link to="/" className="link">Go To Home Page</Link>
                </>
            }
                {
                    !post &&
                    <>
                        <h1>Post Not Found</h1>
                        <p>
                            <Link to="/">Go To Home Page</Link>
                        </p>
                    </>
                }

            </article>
        </main>
    );
};

export default PostPage;
