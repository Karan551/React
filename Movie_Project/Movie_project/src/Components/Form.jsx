import React, { useState } from 'react';

function Form({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
    };


    return (
        <div className='bg-white px-4 py-4 rounded-lg w-2/3 mx-auto flex space-x-2 justify-center' id="form-container">
            <form className="flex space-x-2" onSubmit={handleSubmit}>
                <div className="input-box">

                    <input
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Enter Movie Name:"
                        className="d-inline-block text-2xl font-semibold border-2 border-blue-300 rounded-lg px-4 py-2"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </div>
                <div className="button-container">
                    <button className="text-2xl text-white font-semibold px-4 py-2 bg-teal-500 rounded-lg hover:bg-teal-700 "
                        type='submit'

                    >Search</button>
                </div>


            </form>
        </div>
    );
}

export default Form;
