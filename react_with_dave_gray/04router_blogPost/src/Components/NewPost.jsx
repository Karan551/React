import React from 'react';
import { useOutletContext } from 'react-router-dom';

const NewPost = ({ }) => {
    // const [postTitle, setPostTitle] = useOutletContext();
    // const [postBody, setPostBody] = useOutletContext();
    const { postTitle, setPostTitle, postBody, setPostBody, handleSubmit } = useOutletContext();
    // console.log("this is outlet context", useOutletContext());
    return (
        <main className="NewPost">
            <h2 className="text-center fs-2">New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    required
                    placeholder="Enter Post Title...."
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />

                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    rows={5}
                    placeholder="Enter Post Here...."
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                ></textarea>
                <button type="submit">Submit</button>
            </form>





        </main>
    );
};

export default NewPost;