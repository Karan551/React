import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <main className='aboutUs'>
            <h1>About Us</h1>
            <Link className='link' to={"/"}>Back To Home </Link>
        </main>
    );
}
