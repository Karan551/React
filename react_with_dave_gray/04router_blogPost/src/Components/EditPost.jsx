import React, { useEffect } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

const EditPost = () => {
    const { posts, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody, handleEdit } = useOutletContext();

    const { id } = useParams();
   
    const post = posts?.find((eachPost) => (
        eachPost.id === id ? eachPost : false
    ));


    useEffect(() => {
        if (post) {
            setEditPostTitle(post.title);
            setEditPostBody(post.body);
        }
    }, [setEditPostTitle, setEditPostBody]);
    return (
        <main className="NewPost">
            <h2 className="text-center fs-2">Edit Post</h2>
            <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    required
                    placeholder="Enter Post Title...."
                    value={editPostTitle}
                    // value={post.title}
                    onChange={(e) => setEditPostTitle(e.target.value)}
                />

                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    rows={5}
                    placeholder="Enter Post Here...."
                    value={editPostBody}
                    onChange={(e) => setEditPostBody(e.target.value)}
                ></textarea>
                <button type="button" onClick={() => handleEdit(id)}>Submit</button>
            </form>

        </main>
    );
};

export default EditPost;