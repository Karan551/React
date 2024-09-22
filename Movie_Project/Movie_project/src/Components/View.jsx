import React, { useEffect, useState } from 'react';
import conf from "../conf/config";
import ReactPaginate from "react-paginate";

import Poster from "../images/Poster.jpeg";

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useData } from '../Context/MyContext';



export async function getMovieInfo({ params }) {
    const { id } = params;
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);

        return response.json();

    } catch (error) {
        console.log(error.message);
    }

};

function View() {

    const { search } = useData();
    const navigate = useNavigate();
    const location = useLocation();


    const API_URL = `http://www.omdbapi.com/`;
    const [id, setId] = useState(null);

    const [data, setData] = useState({});
    const [pageNumber, setPageNumber] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [results, setResults] = useState(0);



    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [moviesData, setMoviesData] = useState([]);

    const containerStyle = "flex items-center justify-center px-1 md:px-3 py-1 md:py-2 ms-0 text-sm md:text-2xl leading-tight text-gray-500 bg-white border border-e-0 border-gray-300  hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

    const pageStyle = "flex items-center justify-center px-1 md:px-3 leading-tight text-sm md:text-2xl text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

    const breakClassStyle = "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white px-2";

    

    const getMovie = async (pageNum = 1) => {
        try {
            setLoading(true);

            const response = await fetch(`${API_URL}?apikey=${conf.mykey}&s=${search.trim().toLowerCase()}&page=${pageNum}`);

            if (!response.ok) {
                throw new Error("Oops!");
                setPageCount(0);

            }

            const data = await response.json();
           
            if (data.Response) {
                setMoviesData(data.Search);
                setResults(data.totalResults);
                setLoading(false);
            }
            if (data.Error) {
                setErrorMsg(data.Error);
                setLoading(false);
                setPageCount(0);
            }


        } catch (error) {
            console.log(error.message);
            setErrorMsg(error.message);
            setLoading(false);

        }
    };
    const ITEM_PER_PAGE = 10;
    const totalRequirePage = Math.ceil(results / ITEM_PER_PAGE);

    useEffect(() => {
        getMovie(pageNumber + 1);
    }, [pageNumber]);




    if (loading)
        return <div className="text-2xl md:text-4xl grid place-content-center w-full min-h-screen space-y-4  text-[#212121] dark:text-white" role="status">
            <span className="lds-hourglass mx-auto text-[dodgerblue]"></span>
            <h1 className="py-2"> Loading Please Wait....</h1>
        </div>;

    if (errorMsg)
        return <h1 className="text-2xl md:text-4xl grid place-content-center w-full min-h-screen space-y-4 text-red-500 font-[500] dark:text-white" role="status">{errorMsg}</h1>;

    const handlePageClick = (event) => {
        setPageNumber(event.selected);
    };

    return (
        <>
            <section className='container max-w-lg mx-auto flex justify-center'>
                <ReactPaginate
                    previousClassName={`${containerStyle} rounded-s-lg`}

                    nextClassName={`${containerStyle} rounded-e-lg`}
                    containerClassName="flex justify-center md:justify-normal w-full my-2 mx-2"

                    pageClassName={pageStyle}

                    previousLabel="Previous"
                    nextLabel="Next"
                    activeClassName="btn-active dark:bg-gray-400 dark:text-white"
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={3}
                    pageCount={totalRequirePage}
                    breakLabel="..."
                    breakClassName={breakClassStyle}
                    disabledClassName={"disabled:opacity-40  bg-gray-500 text-gray-500 hover:cursor-not-allowed dark:disabled:bg-gray-800  dark:disabled:text-gray-200/50"}

                    disabledLinkClassName={"disabled:opacity-20 text-gray-400 hover:cursor-not-allowed"}
                    onPageChange={handlePageClick}
                    forcePage={Math.min(pageNumber, totalRequirePage - 1)}
                    renderOnZeroPageCount={null}
                />
            </section>


            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 container mx-auto my-3 gap-2'>
                {
                    moviesData && moviesData.map((eachMovie, index) => (

                        <div key={index} className="max-w-sm bg-white border border-black rounded-lg shadow dark:bg-gray-800 dark:border-white w-full">
                            <Link to={`/detail/${eachMovie.imdbID}`}>
                                <img className="rounded-t-lg w-full" src={eachMovie.Poster != "N/A" ? eachMovie.Poster : Poster} alt={`${eachMovie.Title}-img`} />
                            </Link>
                            <div className="p-5">

                                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name : <span className='text-orange-500 font-semibold'>{eachMovie.Title}</span></h1>

                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Year : <span className='text-orange-500 font-semibold'>{eachMovie.Year}</span></h2>

                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Type : <span className='text-orange-500 font-semibold'>{eachMovie.Type}</span></h2>

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

            </section>

        </>

    );
}

export default View;
