import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import store from './app/store.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home.jsx';
import AllPost from './pages/AllPost.jsx';
import AddPost from './pages/AddPost.jsx';
import EditPost from './pages/EditPost.jsx';
import Post from './pages/Post.jsx';
import { Protected as AuthLayout, Login, SignUp } from "./components/index.js";
import {ImgLoading} from './pages/Post.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [{
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: (
      <AuthLayout authentication={false}>
        <Login />
      </AuthLayout>
    )
  },
  {
    path: "/signup",
    element: (
      <AuthLayout authentication={false}>
        <SignUp />
      </AuthLayout>
    )
  },
  {
    path: "/all-posts",
    element: (
      <AuthLayout authentication={true}>
        <AllPost />
      </AuthLayout>
    )
  },
  {
    path: "/add-post",
    element: (
      <AuthLayout authentication={true}>
        <AddPost />
      </AuthLayout>)
  },
  {
    path: "/edit-post/:postID",
    element: (
      <AuthLayout authentication={true}>
        <EditPost />
      </AuthLayout>
    )
  },

  {
    path: "/post/:postID",
    element: <Post />,
    loader:ImgLoading
  }



  ]
}]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
