import React, { useState } from 'react';
import conf from "../conf/config";

import Info from './Info';
import Poster from "../images/Poster.jpeg";
// import { Link } from "react-router-dom";

function View({ movies }) {

    const [data, setData] = useState({});
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const movieInfo = async (id) => {

        // ${link}${eachMovie.imdbID}
        try {
            console.log("Movie ImDB ID ", id);
            // console.log("This is movie url---", url);
            setLoading(true);
            const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);

            const data = await response.json();

            if (data) {
                setData(data);
                setLoading(false);
                setShowInfo(true);
                console.log("Loaded Data is :", data);
            }

        } catch (error) {
            setErrorMsg(error.message);
            setLoading(false);


        }

    };




    return (
        <div className='grid sm:grid-cols-3 container my-3 gap-2 mx-auto'>
            {

                movies && movies.map((eachMovie, index) => (

                    <div key={index} className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg w-full" src={eachMovie.Poster != "N/A" ? eachMovie.Poster : Poster} alt={`${eachMovie.Title}-img`} />
                        </a>
                        <div className="p-5 ">

                            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : <span className='text-orange-500 font-semibold'>{eachMovie.Title}</span></h1>

                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Year : <span className='text-orange-500 font-semibold'>{eachMovie.Year}</span></h2>

                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Type : <span className='text-orange-500 font-semibold'>{eachMovie.Type}</span></h2>






                            <button

                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => movieInfo(eachMovie.imdbID)}>



                                Know more

                            </button>
                        </div>
                    </div>



                ))

            }

            {
               ( showInfo && data) && <Info eachMovie={data} />
            }

        </div>
    );
}

export default View;
