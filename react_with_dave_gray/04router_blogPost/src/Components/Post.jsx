import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <>
            <article className="post">
                <Link to={`post/${post.id}`} >
                    <h2 className="postHeader">{post.title}</h2>
                    <p className="postDate postHeader">{post.datetime}</p>
                </Link>

                <Link to={`post/${post.id}`}>
                    <p className="postBody postBodyHover">
                        {
                            post.body.length <= 25
                                ? post.body
                                : `${post.body.slice(0, 25)}...`


                        }

                    </p>
                </Link>
            </article>
        </>
    );
};

export default Post;
