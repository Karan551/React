import React from 'react';
import { Feed } from "./index";
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { posts, searchResults, errorMsg } = useOutletContext();
    console.log("home", posts);
    console.log("Error Message", errorMsg);
    return (
        <main className="Home">
            {
                posts.length ?
                    < Feed posts={searchResults} />
                    : (<p className="mt-4 errorMsg">{errorMsg}</p>)
            }
            {
                !posts.length && <p className="mt-4 errorMsg">{errorMsg}</p>
            }
        </main>
    );
};

export default Home;
