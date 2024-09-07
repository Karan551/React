import React from 'react';
import Post from './Post';
const Feed = ({ posts }) => {
    return (
        <>
            {
                posts.map((eachPost) =>

                    <Post key={eachPost.id} post={eachPost} />
                )
            }
        </>
    );
};

export default Feed;
