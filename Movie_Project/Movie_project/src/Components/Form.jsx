import React, { useState } from 'react';
import View from './View';
import conf from "../conf/config";
import { Link } from 'react-router-dom';

function Form() {
    const [inputValue, setInputValue] = useState("");
    const [search, setSearch] = useState(false);

   
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);




    console.log("This is search Value --", inputValue);



    async function getMovie() {

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
    }
    console.log("Movie Data Is :", movieData);

    const handleSubmit = (e) => {
        console.log("Form is submitted");
        e.preventDefault();
        getMovie();
        setSearch(true);

    };

    // To load data.
    if (loading) {
        return (
            <div className="text-center flex items-center justify-center">
                <div role="status">
                    <svg aria-hidden="true" className="w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        );

    }
    if (errorMsg) {
        return <div>Something Went Wrong : {errorMsg}</div>;
    }

    return (
        <>

            <div className='bg-white px-4 py-4 rounded-lg w-full flex space-x-2 justify-center' id="form-container">
                <form className="flex space-x-2" onSubmit={handleSubmit}>
                    <div className="input-box">

                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Enter Movie Name:"
                            className="d-inline-block text-2xl font-semibold border-2 border-blue-300 rounded-lg px-4 py-2"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            required
                        />
                    </div>
                    <div className="button-container">
         
                        <button className="text-2xl text-white font-semibold px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-700 "
                            type='submit'

                        >Search</button>
                       
                    </div>



                </form>
            </div>

            {/* {
                movieData && <View movies={movieData} />
            } */}


        </>
    );
}

export default Form;
