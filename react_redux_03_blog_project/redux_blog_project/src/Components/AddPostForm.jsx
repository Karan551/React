import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "../features/blog/blogSlice";
import React, { useState } from 'react';
// import { selectAllUsers } from "../features/users/userSlice";
const AddPostForm = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");


    const allUsers = useSelector((state) => state.users);
    // console.log("This is all users list:", allUsers);

    const allBlogs = useSelector((state) => state.blog);


    const dispatch = useDispatch();
    const savePost = () => {
        if (title && content && userId) {
            // send data that we want to send.
            dispatch(addPost({
                id: nanoid(),
                title,
                content,
                userId,
                reactions: {
                    thumbsup: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
            }));
            // reset title and content input field after submit data.
            setTitle("");
            setContent("");
            setUserId("");
        }
    };
    // It is used to check all data are given or not .
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const onAuthorChange = (e) => (setUserId(e.target.value));

    const userOptions = allUsers.map((userObject) => (
        <option key={userObject.id} value={userObject.id}>{userObject.name}</option>
    ));

    return (
        <section>
            <h2 className='heading text-center'>Add a new Post:</h2>
            <form>
                <label htmlFor='postTitle'>Add Post Title :</label>
                <input
                    placeholder='Enter Post Title :'
                    type="text"
                    className='post-title'
                    name="post"
                    id="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor='userOption'>Add Author Name :</label>
                <select
                    name="userOption"
                    id="userOption"
                    value={userId}
                    onChange={onAuthorChange}
                >
                    <option value="">--- Select Author ---</option>
                    {userOptions}
                </select>
                <label htmlFor="postContent">Content :</label>
                <textarea name="postContent" id="postContent"
                cols={8}
                rows={5}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}

                ></textarea>
                <button
                    type='button'
                    onClick={savePost}
                    disabled={!canSave}
                    className='savePost-btn'

                >Save Post</button>

            </form>
        </section>
    );
};

export default AddPostForm;
