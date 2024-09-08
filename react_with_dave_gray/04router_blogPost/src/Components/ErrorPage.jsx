import React from 'react';
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <main className="errorPage">
            <h2 className="fs-2">Sorry Page Not Found</h2>
            <p className="fs-1 my-2">{error.status}</p>
            <p className="fs-1">{error.statusText}</p>
            <Link to={"/"} className="link error-link text-center">Visit Home Page</Link>
        </main>
    );
};

export default ErrorPage;
