import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import conf from "../conf/config";
import Poster from "../images/Poster.jpeg";
import { Link } from "react-router-dom";

async function currencyInfo() {
    try {
        const currentDate = new Date().toISOString().split("T")[0];

        const API_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${currentDate}/v1/currencies/usd.json`;

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Can't Fetch Currency Data.");
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Currency Not Found", error.message);
    }
}

function Detail() {
    const { id } = useParams();
    const data = useLoaderData();

    console.log("this is loader data", data);
    console.log("This my id ", id);

    const [movieData, setMovieData] = useState({});
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState("");

    currencyInfo()
        .then((data) => setCurrency(data["usd"]["inr"]))
        // .then(data=>console.log(data['usd']['inr']*2))
        .catch((error) => setErrorMsg(error.message));

    const totalRupee = (amount) => {
        let actualAmount = Number(amount.replaceAll(",", "").slice(1));
        return parseInt(currency * actualAmount).toLocaleString('en-IN')
    };

    const getInformation = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(
                `http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`
            );

            const data = await response.json();
            console.log("this is data", data);
            if (data) {
                setLoading(false);
                setMovieData(data);
            }
        } catch (error) {
            console.log("Movie Information error :", error.message);
            setErrorMsg(error.message);
        }
    }, [id]);

    // const myData = useLoaderData();
    // console.log("this is movie data",getInformation)
    console.log("each movie data is :", data);

    useEffect(() => {
        getInformation();
    }, [id]);

    if (loading) {
        <div>Data is loading Please Wait.</div>;
    }

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 space-x-2 gap-3 py-2 px-2">
                {data && (
                    <>
                        <div className="max-w-md px-6 py-2 border-2  bg-white rounded-lg w-full lg:max-w-[28rem]cells md:justify-self-center">
                            <img
                                className="rounded-xl h-auto w-full object-cover block "
                                src={data.Poster != "N/A" ? data.Poster : Poster}
                                alt={data.Title + "-img"}
                            />
                        </div>

                        <div className=" px-6 py-2 bg-white rounded-xl ">
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500">Movie Name :-</strong>{" "}
                                {data.Title}
                            </p>
                            <p className="mb-2 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Genre :- </strong>
                                {data.Genre}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Actors :- </strong>
                                {data.Actors}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Awards :- </strong>
                                {data.Awards}
                            </p>

                            {data.BoxOffice != "N/A" && (
                                <p className="my-3 text-xl md:text-2xl">
                                    <strong className="text-orange-500/85">BoxOffice :- </strong>
                                    {data.BoxOffice} <br/>
                                    <span className="text-green-700">
                                    <strong>Indian Currency :- </strong>
                                    
                                       &nbsp; {totalRupee(data.BoxOffice)} &#8377;
                                    </span>
                                </p>
                            )}
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Language :- </strong>
                                {data.Language}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Released :- </strong>
                                {data.Released}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Type :- </strong>{" "}
                                {data.Type}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85"> Year :-</strong>{" "}
                                {data.Year}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Runtime :-</strong>{" "}
                                {data.Runtime}
                            </p>
                            <p className="mb-1 text-xl md:text-2xl">
                                <strong className="text-orange-500/85">Writer :-</strong>{" "}
                                {data.Writer}
                            </p>
                            <div>
                                <p className="mb-1 text-xl md:text-2xl">
                                    {" "}
                                    <strong className="text-orange-500/85">
                                        Ratings :-
                                    </strong>{" "}
                                </p>
                                <ul className="px-8 marker:text-black list-disc text-lg md:text-2xl">
                                    {data.Ratings.map((eachRating) => (
                                        <li className="text-[dodgerblue]">
                                            {eachRating.Source + " " + eachRating.Value}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/view">
                                <button
                                    type="button"
                                    className="inline-block mt-6 px-6 py-3 font-semibold  text-lg text-white bg-teal-500 rounded-xl hover:bg-teal-700"
                                >
                                    Back To Home
                                </button>
                            </Link>
                        </div>
                    </>
                )}
            </section>
        </>
    );
}

export default Detail;

/* export const movieLoader = async () => {

}; */

// export const getInformation = async () => {

//     console.log("Function is working fine");

//     const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);

//     return response.json();
//     // return data;

// };

/* export const githubInfoLoader = async () => {
    const { id } = useParams();
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
} */
