import { useSelector } from "react-redux";
import React from 'react';
import { PostAuthor, ReactionBtn } from "../Components/index";

const Postlist = () => {
    // this will give us initial state blog property value 
    const blogs = useSelector(state => state.blog);
    const orderedBlogs = blogs.slice().reverse();

    const renderedPost = orderedBlogs.map((eachBlogObject) => {
        return (
            <article key={eachBlogObject.id} className="article">
                <h2>{eachBlogObject.title}</h2>
                <p>{eachBlogObject.content.substring(0,)}</p>
                <p className="postCredit">
                    <PostAuthor userId={eachBlogObject.userId} />
                </p>
                <ReactionBtn post={eachBlogObject} />
            </article>
        );
    });

    return (
        <section>
            <h2 className="text-center heading">All Posts</h2>
            {renderedPost}
        </section>
    );
};

export default Postlist;
