import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
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
    const data = useLoaderData();

    const [currency, setCurrency] = useState("");

    currencyInfo()
        .then((data) => setCurrency(data["usd"]["inr"]))
        .catch((error) => setErrorMsg(error.message));

    const totalRupee = (amount) => {
        let actualAmount = Number(amount?.replaceAll(",", "").slice(1));
        return parseInt(currency * actualAmount).toLocaleString('en-IN');
    };

    return (
        <>
            <section className="grid grid-cols-1 md:grid-cols-2 space-x-2 gap-3 py-2 px-2 dark:bg-gray-500">
                {data && (
                    <>
                        <div className="max-w-md px-6 py-2 border-2  bg-white rounded-lg w-full lg:max-w-[28rem]cells md:justify-self-center dark:bg-gray-600">
                            <img
                                className="rounded-xl h-auto w-full object-cover block "
                                src={data.Poster != "N/A" ? data.Poster : Poster}
                                alt={data.Title + "-img"}
                            />
                        </div>

                        <div className=" px-6 py-2 bg-white rounded-xl dark:text-white dark:bg-gray-600 dark:border-white dark:border">
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

                            {data.BoxOffice && data.BoxOffice != "N/A" && (
                                <p className="my-3 text-xl md:text-2xl">
                                    <strong className="text-orange-500/85">BoxOffice :- </strong>
                                    {data.BoxOffice} <br />
                                    <span className="text-green-700 dark:text-green-500">
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
                            {
                                data.Ratings && <div>

                                    <p className="mb-1 text-xl md:text-2xl">
                                        {" "}
                                        <strong className="text-orange-500/85">
                                            Ratings :-
                                        </strong>{" "}
                                    </p>
                                    <ul className="px-8 marker:text-black list-disc text-lg md:text-2xl dark:marker:text-white">
                                        {data.Ratings.map((eachRating, index) => (
                                            <li className="text-[dodgerblue] dark:text-[#f5f5f5]" key={index}>
                                                {eachRating.Source + " " + eachRating.Value}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            }

                            <Link to="/view">
                                <button
                                    type="button"
                                    className="inline-block mt-6 px-6 py-3 font-semibold  text-lg text-white bg-teal-500 rounded-xl hover:bg-teal-700 dark:border dark:border-white"
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
