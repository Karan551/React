import { useEffect, useState } from "react";
import { Container, PostCard } from "../components/index";
import dbService from "../appwrite/dbConfig";

export default function AllPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        dbService.showPosts()
            .then((post) => {
                if (post) {
                    // console.log("This is all post ::", post);
                    setPosts(post.documents);
                }
            })
            .catch((error) => console.log("Error in AllPosts ::", error.message));
    }, []);
    console.log("this is post in allPost::--",posts)
    console.log("this is post in allPost::??---",...posts)
    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">

                    {
                        posts.map((eachPost) => (
                            <div key={eachPost.$id} className="w-1/2 p-2">
                                <PostCard {...eachPost} />
                            </div>
                        ))

                    }
                </div>
            </Container>
        </div>
    );
}
