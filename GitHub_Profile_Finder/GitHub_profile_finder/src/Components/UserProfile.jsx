import React from 'react';

function UserProfile({ profile }) {

    // destructre of an object.

    const { avatar_url, name, followers, following, created_at, public_repos, html_url } = profile;
    // console.log("This is user Profile Data is", profile);

    return (
        <div id='profile-container' className='text-white my-2 grid grid-cols-1 space-x-2 rounded-lg sm:grid-cols-2 px-4 py-2 bg-gray-400 '>
            <div className='max-w-96' >
                <img src={avatar_url} alt={`${name}-img`} className='rounded-full' />
            </div>
            <div className='border-2 rounded-lg px-4 py-2'>
                <div id="name-container" className='flex flex-col '>

                    <h1 className='text-5xl'>Name: <span className='text-5xl text-orange-500'>{name ? name : "Master"}</span></h1>



                    <h2 className='text-4xl my-2'>Followers: <span className='text-orange-500'>{followers}</span></h2>




                    <h3 className='text-4xl'>Public Repos: <span>{public_repos}</span></h3>
                    <a href={html_url} target='_blank'>Show Git Repo:</a>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
