
import { Outlet, useNavigate } from "react-router-dom";
import { About, Footer, Header, Home, Nav, PostPage } from "./Components/index";
import { useEffect, useState } from "react";
import { postData } from "./data";
import { format } from "date-fns";
import api from "./api/post";
function App() {

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [posts, setPosts] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);


  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");




  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? Number(posts[posts.length - 1].id) + 1 + "" : 1 + "";

    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, datetime, title: postTitle, body: postBody };


    try {
      const response = await api.post("/posts", newPost);

      const allPosts = [...posts, newPost];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      // here we will redirect
      navigate("/");

    } catch (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    }


  };

  const handleDelete = async (id) => {


    try {
      const response = await api.delete(`/posts/${id}`);
      const newPostList = posts.filter((eachPost) => eachPost.id !== id);

      setPosts(newPostList);
      // here we will redirect
      navigate("/");
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error.message);
    }



  };

  const handleEdit = async (id) => {

    const datetime = format(new Date(), "MMMM dd, yyyy pp");

    const updatedPost = { id, title: editPostTitle, body: editPostBody, datetime };

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((eachPost) => eachPost.id === id ? { ...response.data } : eachPost));

      setEditPostTitle("");
      setEditPostBody("");
      // here we will redirect
      navigate("/");
    } catch (error) {
      console.log(error.message);
      setErrorMsg(error.message);
    }


    /*
    // This is second method to update/edit post
    
     let updatedPost = posts.find((eachPost) => (
      eachPost.id === id ? eachPost : false
    ));
    updatedPost = { ...updatedPost, datetime, title: editPostTitle, body: editPostBody };

     // const response = await api.patch(`/posts/${id}`, updatedPost);
     
     // setPosts(posts.map((eachPost) => eachPost.id == id ? updatedPost : eachPost));
     
     */


  };



  useEffect(() => {

    const filteredResults = posts.filter((eachPost) => (
      (eachPost.title.toLowerCase()).includes(search.toLowerCase())
      || (eachPost.body.toLowerCase()).includes(search.toLowerCase())
    ));
    setSearchResults(filteredResults.reverse());
  }, [search, posts]);

  useEffect(() => {
    setLoading(true);
    const fetchItems = async () => {
      try {
        const response = await api.get("/posts");
        console.log("this is response", response.data);

        if (response && response.data) {
          setPosts(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message);
        setErrorMsg(error.message);
      }

    };

    fetchItems();


  }, []);
  return (
    <div className="App">
      <Header title={"React JS Blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Outlet context={{ searchResults, posts, postTitle, setPostTitle, postBody, setPostBody, handleDelete, handleSubmit, editPostTitle, setEditPostTitle, editPostBody, setEditPostBody, handleEdit, errorMsg }} />
      {/* <Home /> */}
      {/* <PostPage /> */}
      {/* <About /> */}
      <Footer />
    </div>
  );
}

export default App;
