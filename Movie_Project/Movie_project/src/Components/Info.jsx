import React, { useEffect, useState } from 'react';
import conf from "../conf/config";

import Poster from "../images/Poster.jpeg";
import { useData } from '../Context/MyContext';



function Info() {


    const { id } = useData();

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


    console.log("each movie data is :", data);

    useEffect(() => {
        getInformation();
    }, [id]);



    if (loading) {
        <div>Data is loading Please Wait.</div>;
    }

    return (
        <div>

            <div className="container">
                <h2>Detail Information are:-</h2>
               

            </div>
        </div>
    );
}


export default Info;
