import React from 'react';
import { useSelector } from 'react-redux';

function PostAuthor({ userId }) {
    const allUsers = useSelector(state => state.users);
    const author = allUsers.find((eachUserObject) => eachUserObject.id == userId);

    return (
        <span>By {author ? author.name : "Unknown Author"}</span>
    );
}

export default PostAuthor;
