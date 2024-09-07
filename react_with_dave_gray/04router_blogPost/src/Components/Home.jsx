import React from 'react';
import { Feed } from "./index";
import { useOutletContext } from 'react-router-dom';

const Home = () => {
    const { posts,searchResults } = useOutletContext();
    console.log("this is post in home", posts);
    return (
        <main className="Home">
            {
                posts.length ?
                    < Feed posts={searchResults} />
                    : (<p className="mt-4">Data is not available</p>)
            }
        </main>
    );
};

export default Home;
