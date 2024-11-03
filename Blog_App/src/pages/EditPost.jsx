import { useEffect, useState } from "react";
import { Container, PostForm } from "../components/index";
import { useParams, useNavigate } from "react-router-dom";
import dbService from "../appwrite/dbConfig";


export default function EditPost() {
    const [post, setPost] = useState([]);
    const navigate = useNavigate();
    const { postID } = useParams();

    useEffect(() => {
        if (postID) {
            dbService.getPost(postID)
                .then((eachPost) => setPost(eachPost))
                .catch(() => console.log("Appwrite service getpost error::", error.message));
        } else {
            navigate("/");
        }
    }, [postID]);
    console.log("this is post in edit post::", post);
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : <div>No Post To show <Link to="/" className="inline-block p-4 rounded-lg bg-teal-500 hover:bg-teal-700 text-white">Go To Home Page</Link></div>;
}
