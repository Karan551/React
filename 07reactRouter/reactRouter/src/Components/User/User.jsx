import React from 'react';
import {useParams} from 'react-router-dom'
function User() {
    const { userId } = useParams()
    return (
        <div>
            <h1 className='text-4xl my-4  px-4 py-6 text-center text-white rounded-lg bg-gray-500'>This is user page.{userId}</h1>
        </div>
    );
}

export default User;
