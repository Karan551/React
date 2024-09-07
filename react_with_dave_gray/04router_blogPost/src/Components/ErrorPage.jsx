import React from 'react';
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <main>
            <h2>Page Not Found</h2>
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </main>
    );
};

export default ErrorPage;
