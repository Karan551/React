import React, { useEffect, useState } from 'react';

function View({ searchValue }) {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
 
    async function getMovie(searchValue) {
        console.log("This is search",searchValue)
        try {
            setLoading(true);
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=b2ccf8ac&s=${searchValue ? searchValue : ""}`);
            const data = response.json();
            console.log("This is data in ---", data);
            if (data && data.length > 0) {
                setLoading(false);
                setMovie(data);

            }


        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
            console.log(error);
        }
    }

    if (loading) {
        return <div>Data Is Loading Please Wait.</div>;
    }
    if (errorMsg) {
        return <div>Something Went Wrong : {errorMsg}</div>;
    }

    useEffect(() => {
        if (search !== null) getMovie(searchValue);
    }, [search,searchValue]);

    console.log("This is movie result", movie);
    return (
        <div>
            <h2 className='text-3xl my-3 font-semibold'>Movie View</h2>
            <p className='text-2xl font-semibold'>Search Value Come from : {searchValue}</p>
        </div>
    );
}

export default View;
