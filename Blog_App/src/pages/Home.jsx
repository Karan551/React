import React, { useEffect, useState } from 'react';
import { Container, PostCard } from "../components/index";
import dbService from "../appwrite/dbConfig";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const isLoggedIn = useSelector((state) => state.myblog.status);
    console.log("user logged in ::", isLoggedIn);

    useEffect(() => {
        dbService.showPosts()
            .then((eachPost) => {
                if (eachPost) {
                    console.log("this is each post in Home ::", eachPost);
                    setPosts(eachPost.documents);
                }
            })
            .catch((error) => console.log("Error in show posts in Home ::", error.message));

    }, []);

    if (posts.length == 0 || !isLoggedIn) {
        return <div className="w-full py-2 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl md:text-3xl font-bold ">
                            <Link to={"/login"}
                                className="text-blue-500 hover:text-blue-700 hover:underline"
                            > Login</Link> to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>;
    }
    return (
        isLoggedIn && <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((eachPost) => (

                            <div key={eachPost.$id} className="w-1/2 md:w-1/4 p-2">
                                <PostCard {...eachPost} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );


}
