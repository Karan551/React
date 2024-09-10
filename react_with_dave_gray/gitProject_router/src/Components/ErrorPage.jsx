import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log("this is error ", error);

    return (
        <main className='errorPage'>


            <h1 className='heading'>Page Not Found.</h1>
            <p className='para'>{error.statusText}</p>
            <p className='para'>{error.status}</p>
            <Link className='link' to={"/"}>Go To Home Page</Link>
        </main>
    );
};

export default ErrorPage;