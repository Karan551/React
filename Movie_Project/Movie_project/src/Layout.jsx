import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Form from './Components/Form';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { MyContextProvider } from './Context/MyContext';


function Layout() {
    const [search, setSearch] = useState("");
    return (
        <>
            <MyContextProvider value={{ search, setSearch }}>
                <Header />
                <main className='min-h-screen flex-grow bg-gray-200'>

                    <Outlet />
                </main>
            </MyContextProvider>
            <Footer />
        </>
    );
}

export default Layout;
