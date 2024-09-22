import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import View, { getMovieInfo } from './Components/View.jsx';

import Layout from './Layout.jsx';
import Detail from './Components/Detail.jsx';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route path='view' element={<View />} />
      <Route loader={getMovieInfo} path='detail/:id' element={<Detail />} />

    </Route>
  ));





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
);
