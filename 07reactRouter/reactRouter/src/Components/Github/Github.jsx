import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export default function Github() {
    // This is optimize method to import data via api.
    const data = useLoaderData();
    // we can more optimize using loader
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary")
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });

    // }, []);



    return (
        <>
            <div className='text-3xl px-2 py-4 my-2 text-center bg-sky-500 text-[#f5f5f5]'>
                Github Followers: {data.followers}
            </div>
            <div className=' grid sm:grid-cols-2 my-2  bg-gray-100 rounded-lg py-2 px-2 gap-2 '>
                <div className='flex sm: justify-center sm:items-center'>
                    <img src={data.avatar_url} alt="Github-img" className='rounded-full max-w-96 w-full object-cover' width="400" height="500" />
                </div>
                <div className=' px-4 py-4 my-2 mx-2 border rounded-lg bg-white'>
                    <span className='text-blue-500 text-3xl font-semibold '>Brief Intro :</span>
                    <br />

                    <div className='flex flex-col justify-start items-start  my-2 text-left'>
                        <p className='text-lg'> <span className='text-sky-400 font-extrabold'> Name : </span> {data.name}</p>
                        <p className='text-lg'> <span className='text-sky-500 font-extrabold'> Bio : </span>{data.bio}</p>
                        <p className='text-lg'> <span className='text-sky-500 font-extrabold'> Location : </span>{data.location}</p>
                        <p className='text-lg my-2'><Link to={data.blog} target='_blank' className='bg-orange-500 hover:bg-orange-700 rounded-lg px-4 py-2 text-white text-center font-semibold inline-block' title='Youtube '>Youtube</Link>  </p>


                    </div>
                </div>
            </div>


        </>
    );
}
// To optimize purpose of loader
export const gitInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
};