import React from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from "../features/blog/blogSlice";
const reactionEmoji = {
    thumbsup: '👍',
    wow: '😮',
    heart: '💓',
    rocket: '🚀️',
    coffee: '☕',
};



const ReactionBtn = ({ post }) => {
    const dispatch = useDispatch();
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            type='button'
            key={name}
            className='reactionButton'
            onClick={() => dispatch(addReaction({ postId: post.id, reaction: name }))}
        >{emoji} : {post.reactions[name]}</button>
    ));

    return (
        <span>
            {reactionButtons}
        </span>
    );
};

export default ReactionBtn;
