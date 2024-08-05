import React from 'react';
import {Link} from "react-router-dom"
import appwriteService from "../appwrite/db_config"

function PostCard({ $id, title, featuredImage }) {
    return (
        // here we will use <Link></Link>
        <div className='w-full rounded-xl p-4 bg-gray-200'>
        <div className='w-full mb-4'>
            <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h2 className='text-xl font-semibold '>{title}</h2>
        </div>
    );
}

export default PostCard;
