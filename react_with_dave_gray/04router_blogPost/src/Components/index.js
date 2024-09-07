import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./About";
import Home from "./Home";
import PostPage from "./PostPage";
import ErrorPage from "./ErrorPage";
import Helper from "./Helper";
import Feed from "./Feed";
import NewPost from "./NewPost";





export { Header, Footer, Nav, Home, About, ErrorPage, PostPage, Helper, Feed, NewPost };







/*
children: [
  {
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
     
    ],
}
]

*/