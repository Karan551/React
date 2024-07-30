import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import conf from "../conf/config";
import Poster from "../images/Poster.jpeg";
import { Link } from 'react-router-dom';


function Detail() {

    const { id } = useParams();
    console.log("This my id ", id);

    const [data, setData] = useState({});
    const [errorMsg, setErrorMsg] = useState(false);
    const [loading, setLoading] = useState(false);

    async function getInformation() {
        try {

            setLoading(true);
            const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);


            const data = await response.json();
            if (data) {

                setLoading(false);
                setData(data);
            }


        } catch (error) {
            console.log("Movie Information error :", error.message);
            setErrorMsg(error.message);
        }
    }

    // const myData = useLoaderData();
    console.log("each movie data is :", data);

    useEffect(() => {
        getInformation();
    }, [id]);



    if (loading) {
        <div>Data is loading Please Wait.</div>;
    }



    return (
        <div>
            <h2>This is detail Component ID :-{id}</h2>
            <section className='grid grid-cols-2 mx-auto'>

                {
                    data &&
                    <section>
                        <img src={data.Poster != "N/A" ? data.Poster : Poster} alt="img" />
                    </section>
                }


                <section>

                </section>
            </section>
            <Link to="/">Back To Home </Link>
        </div>
    );
}

export default Detail;



/* export const movieLoader = async () => {

}; */

export const getInformation = async () => {
    // const { id } = useParams();

    console.log("Function is working fine");

    // const response = await fetch(`http://www.omdbapi.com/?apikey=${conf.mykey}&i=${id}`);


    // return response.json();
    // return data;



};


/* export const githubInfoLoader = async () => {
    const { id } = useParams();
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
} */