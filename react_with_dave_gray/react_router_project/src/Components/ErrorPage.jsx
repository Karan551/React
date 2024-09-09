import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

function ErrorPage() {

    const error = useRouteError();
    console.log(error);
    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>

                <b>{error.status}</b>
                <i> {error.statusText || error.message}</i>
            </p>
            <Link to="/">Back To Home</Link>
        </div>
    );
}

export default ErrorPage;
