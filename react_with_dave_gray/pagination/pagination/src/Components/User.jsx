import React from 'react';

export default function User({ user }) {
    return (
        <article>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}-img`} />
            <h2>{`${user.first_name} ${user.last_name}`}</h2>
            <p>Email : {user.email}</p>
            <p>User ID : {user.id}</p>
        </article>
    );
}