import React from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Form />
           
            <Outlet />
        </div>
    );
}

export default Layout;
