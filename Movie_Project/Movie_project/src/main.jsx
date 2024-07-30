import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';


import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import View from './Components/View.jsx';
import Form from './Components/Form.jsx';
import Layout from './Layout.jsx';
import Detail from './Components/Detail.jsx';

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <View />
      },
      {
        path: "show",
        element: <Info />
      }
    ]
  },
]); */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>



      <Route path='detail/:id' element={<Detail />} />

    </Route>
  ));





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
);
