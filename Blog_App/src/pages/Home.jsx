import React, { useEffect, useState } from 'react';
import { Container, PostCard } from "../components/index";
import dbService from "../appwrite/dbConfig";

export default function Home() {
    const [posts, setPosts] = useState([]);

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

    if (posts.length > 0) return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {
                        posts.map((eachPost) => {

                            <div key={eachPost.$id} className="w-1/4 p-2">
                                <PostCard {...eachPost} />
                            </div>;
                        })
                    }
                </div>
            </Container>
        </div>
    );

    if (posts.length == 0) {
        <div className="w-full py-2 mt-4 text-center">
            <Container>
                <div className="flex flex-wrap">
                    <div className="p-2 w-full">
                        <h1 className="text-2xl font-bold hover:text-gray-500">
                            Login to read posts
                        </h1>
                    </div>
                </div>
            </Container>
        </div>;
    }
}
