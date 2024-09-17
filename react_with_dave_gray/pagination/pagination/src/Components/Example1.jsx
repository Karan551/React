import React, { useEffect, useState } from 'react';
import { getPosts } from '../api/axios';
import Post from './Post';
export default function Example1() {
    const [pageNumber, setPageNumber] = useState(1);
    const [posts, setPosts] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        getPosts(pageNumber)
            .then((post) => { setPosts(post); setLoading(true); })
            .catch((error) => setErrorMsg(error.message));
    }, [pageNumber]);
    console.log("all posts is ", posts);
    // here we will work 
    const content = posts.map((eachPost) => <Post key={eachPost.id} post={eachPost} />);

    const prevPage = () => {
        setPageNumber(prev => prev - 1);

    };
    const nextPage = () => {
        setPageNumber(next => next + 1);
    };


    return (
        <main>
            <nav>
                <button onClick={prevPage} disabled={pageNumber === 1}>Previous Page</button>
                <button onClick={nextPage} disabled={!posts.length}>Next Page</button>
            </nav>
            {content.length > 0 && loading ? content
                : <div className="error-message">
                    Loading....<p className="loader"></p>
                </div>}
        </main>
    );
}