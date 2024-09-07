
import { Outlet, useNavigate } from "react-router-dom";
import { About, Footer, Header, Home, Nav, PostPage } from "./Components/index";
import { useEffect, useState } from "react";
import { postData } from "./data";
import { format } from "date-fns";

function App() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [posts, setPosts] = useState(postData);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, datetime, title: postTitle, body: postBody };

    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    // here we will redirect
    navigate("/");
  };

  const handleDelete = (id) => {
    const newPostList = posts.filter((eachPost) => eachPost.id !== id);

    setPosts(newPostList);
    // here we will redirect
    navigate("/");
  };

  const handleUpdate = (post, id) => {
    const updatedPost = posts.filter((eachPost) => (
      eachPost.id === id ? { ...eachPost, title, body } : eachPost
    ));
  };


  useEffect(() => {

    const filteredResults = posts.filter((eachPost) => (
      (eachPost.title.toLowerCase()).includes(search.toLowerCase())
      || (eachPost.body.toLowerCase()).includes(search.toLowerCase())
    ));
    setSearchResults(filteredResults.reverse());
  }, [search, posts]);

  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet context={{ searchResults, posts, postTitle, setPostTitle, postBody, setPostBody, handleDelete, handleSubmit }} />
      {/* <Home /> */}
      {/* <PostPage /> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
