import React from 'react';
import dbService from "../appwrite/dbConfig";

export default function PostCard({ id, title, featuredImg }) {
// TODO: use Link in react-router-dom
    return (
        <a href='#'>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className="mb-4 w-full">
                <img src={dbService.filePreview(featuredImg)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
        </a>
    );
}
