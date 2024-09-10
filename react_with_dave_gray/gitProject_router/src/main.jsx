import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home, { fetchRepos } from './Components/Home.jsx';
import User, { getGitUsers } from "./Components/User.jsx";
import UserProfile from './Components/UserProfile.jsx';
import About from "./Components/About.jsx";
import ErrorPage from './Components/ErrorPage.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorPage />} >
      <Route index={true} loader={fetchRepos} element={<Home />} />
      <Route path='users' loader={getGitUsers} element={<User />} />
      <Route path='users/user/:userId' element={<UserProfile />} />
      <Route path='about' element={<About />} />

    </Route>
  ));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
);
