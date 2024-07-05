import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile';

function GithubProfileFinder({ url }) {
    const [userName, setUserName] = useState("sangammukherjee");
    // const [userName, setUserName] = useState("");

    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getUserData() {

        try {
            setLoading(true);

            const response = await fetch(`https://api.github.com/users/${userName}`);
            // const response = await fetch(`https://api.github.com/users/rate_limit`);

            const data = await response.json();
            if (data) {
                // console.log(data);
                setLoading(false);
                setUserData(data);
                // remove default value
                setUserName("");

            }
        } catch (error) {

            setLoading(false);
            setErrorMsg(error.message);
            console.log("Error Data fetching", error.message);
        }
    }
    useEffect(() => {

        getUserData();

    }, []);

    console.log("Our Loaded Data is :", userData);
    const handleSubmit = () => {
        console.log("form is success fully submitted.");
        getUserData();
    };




    if (loading) {
        return <div>Data Is Loading Please Wait!</div>;
    }
    if (errorMsg) {
        return <div>Something Went Wrong :{errorMsg}</div>;
    }
   
    const renderComponent = () => {
        if (userData && userData.status != "404") {
            return <UserProfile profile={userData} />;
        } else {
            return <div>User Not Found.</div>;
        }
    };


    return (

        <div className='flex-grow px-4 py-6 w-2/3 mx-auto my-2' id="form-container">

            <form onSubmit={handleSubmit} method='post'>
                <input
                    className='border-2 border-blue-400 px-4 py-3 rounded-lg font-semibold text-lg w-2/3 text-black'
                    type="text"
                    placeholder='Enter Your Github User Id ....'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    name="userName"
                    id="userName" />

                <button
                    type="submit"
                    className='px-6 py-4 bg-teal-500 font-semibold text-white text-lg rounded-lg hover:bg-teal-700 '

                >Search</button>
            </form>
            {



                renderComponent()
            }

        </div>

    );
}

export default GithubProfileFinder;
