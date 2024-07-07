import React, { useEffect, useState } from 'react';

import "./search.css";
import Suggesstion from './Suggesstion';


function Search() {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const [inputValue, setInputValue] = useState("");
    const [showDropDown, setShowDropDown] = useState(false);
    const [filteredUser, setFilteredUser] = useState([]);


    async function getUser() {
        try {
            setLoading(true);

            const response = await fetch("https://dummyjson.com/users?limit=50");

            const data = await response.json();
            if (data && data.users && data.users.length > 0) {
                console.log(data.users.map((eachObject) => eachObject.firstName));

                setData(data.users.map((eachObject) => eachObject.firstName
                ));
                setLoading(false);

            }

        } catch (error) {
            setLoading(false);
            setErrorMsg(error.message);
        }
    }

    useEffect(() => {

        getUser();
    }, []);
    // ----------------------
    const handleChange = (event) => {
        setInputValue(event.target.value);

        // user query
        const userQuery = event.target.value.trim().toLowerCase();

        console.log("this is user Query:", userQuery);


        if (userQuery.length > 0) {
            const filteredArr = data && data.length > 0 ?
                data.filter((eachItem) => {
                    return eachItem.toLowerCase().startsWith(userQuery);
                    /*  return eachItem.toLowerCase().indexOf(userQuery) != -1; */

                })
                : [];

            console.log("This is filteredArr Data :----", filteredArr);

            // If user write something in input field then show Dropdown
            setShowDropDown(true);
            setFilteredUser(filteredArr);

        }
        else {

            setShowDropDown(false);
        }


    };





    // -----------------------
    console.log("This is our data ", data);
    
    const handleClick = (event) => {
        setInputValue(event.target.innerText);

        setShowDropDown(false);
    };



    if (loading) {
        return <div>Data Is Loading Please Wait.</div>;
    }

    if (errorMsg) {
        return <div>Something Went Wrong : {errorMsg}</div>;
    }

    return (
        <div>
            <h2 className='my-2'>This is search autocomplete component.</h2>
            <input
                className='input-field'
                type="text"
                placeholder='Enter User Name....'
                value={inputValue}
                onChange={handleChange}
            />
            {
                showDropDown && <Suggesstion handleClick={handleClick} data={filteredUser} />
            }

        </div>
    );
}

export default Search;
