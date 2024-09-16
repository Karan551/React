import React, { useEffect, useState } from 'react';
import conf from "../conf/config";
import axios from "axios";

import Info from './Info';
import Poster from "../images/Poster.jpeg";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useData } from '../Context/MyContext';
import Footer from './Footer';


/* const getMovie = async () => {

    try {
        setLoading(true);
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${conf.mykey}&s=${inputValue.toLowerCase()}`);
        const data = await response.json();
        console.log("This is data in ---", data);

        if (data) {
            setLoading(false);

            setMovieData(data.Search);

        }


    } catch (error) {
        setLoading(false);
        setErrorMsg(error.message);
        console.log(error);
    }
}; */

export async function getMovieInfo({ params }) {
    // ${link}${eachMovie.imdbID}
    // const { id } = params;
    const { id } = params;
    console.log("this is movie id", id);
    try {
        console.log("Movie ImDB ID ---", id);
        // console.log("This is movie url---", url);

        const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);
        // const response = await axios.get(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);

        return response.json();
        const data = await response.json();
        console.log("this is data with loader", data);
        return data;

    } catch (error) {
        console.log(error.message);
    }

};


function View() {

    const { search } = useData();
    const navigate = useNavigate();

    const [id, setId] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const [data, setData] = useState({});
    const [showInfo, setShowInfo] = useState(false);

    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [moviesData, setMoviesData] = useState([]);
    const API_URL = "http://www.omdbapi.com/";


    /* 
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
    
        }; */
    // i=tt3896198&
    useEffect(() => {
        const getMovie = async () => {
            try {
                setLoading(true);
                // const response = await axios.get(`http://www.omdbapi.com/?apikey=${conf.mykey}&s=${search.toLowerCase()}`);
                const response = await fetch(`${API_URL}?apikey=${conf.mykey}&s=${search.toLowerCase()}`);

                if (!response.ok)
                    throw new Error("Oops!");

                const data = await response.json();

                if (data.Response) {
                    setMoviesData(data.Search);
                    setLoading(false);
                }
                if (data.Error) {
                    setErrorMsg(data.Error);
                    setLoading(false);
                }


            } catch (error) {
                console.log(error.message);
                setErrorMsg(error.message);
                setLoading(false);

            }
        };
        getMovie();
    }, []);


    if (loading)
        return <div className="text-2xl md:text-4xl grid place-content-center w-full min-h-screen space-y-4  text-[#212121] dark:text-white" role="status">
            <span className="lds-hourglass mx-auto text-[dodgerblue]"></span>
            <h1 className="py-2"> Loading Please Wait....</h1>
        </div>;

    if (errorMsg)
        return <h1 className="text-2xl md:text-4xl grid place-content-center w-full min-h-screen space-y-4 text-red-500 font-[500] dark:text-white" role="status">{errorMsg}</h1>;

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 container mx-auto my-3 gap-2'>
                {
                    moviesData && moviesData.map((eachMovie, index) => (

                        <div key={index} className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
                            <a href="#">
                                <img className="rounded-t-lg w-full" src={eachMovie.Poster != "N/A" ? eachMovie.Poster : Poster} alt={`${eachMovie.Title}-img`} />
                            </a>
                            <div className="p-5">

                                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : <span className='text-orange-500 font-semibold'>{eachMovie.Title}</span></h1>

                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Year : <span className='text-orange-500 font-semibold'>{eachMovie.Year}</span></h2>

                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Type : <span className='text-orange-500 font-semibold'>{eachMovie.Type}</span></h2>

                                {/* navigate(`/detail/${eachMovie.imdbID}`);  */}



                                <Link to={`/detail/${eachMovie.imdbID}`}

                                >
                                    <button

                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => { setId(eachMovie.imdbID); }}>



                                        Know more

                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))

                }

            </div>

        </>

    );
}

export default View;
