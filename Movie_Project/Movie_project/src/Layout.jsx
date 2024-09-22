import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { MyContextProvider } from './Context/MyContext';


function Layout() {

    const prevInput = JSON.parse(localStorage.getItem("inputValue"));
    const [search, setSearch] = useState(prevInput ? prevInput : "");

    const { state } = useNavigation();

    const defaultTheme = JSON.parse(localStorage.getItem("myTheme"));

    const [theme, setTheme] = useState(defaultTheme ? defaultTheme : "light");

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");

        document.documentElement.classList.add(theme);
        localStorage.setItem("myTheme", JSON.stringify(theme));

    }, [theme]);

    useEffect(() => {

        localStorage.setItem("inputValue", JSON.stringify(search));

    }, [search]);

    return (
        <>
            <MyContextProvider value={{ search, setSearch, theme, setTheme }}>
                <Header />
                <main className={`min-h-screen flex-grow bg-gray-200 dark:bg-gray-500 
                ${state === 'loading' ?
                        'loading' : ''}`}
                >

                    <Outlet />
                </main>
            </MyContextProvider>
            <Footer />
        </>
    );
}

export default Layout;
