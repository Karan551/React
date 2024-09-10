import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';

export const fetchRepos = async () => {
    const API_URL = "https://api.github.com/search/repositories?q=XXX";
    const response = await fetch(API_URL);
    return response.json();

};




const Home = () => {

    // const API_URL = "https://api.github.com/search/repositories?q=XXX";
    // const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    let repos = useLoaderData();
    const navigation = useNavigation();
    // console.log('This is repo data', repos);
    if (!repos) {
        setLoading(true);
    }
    repos = repos?.items;


    /* useEffect(() => {
        setLoading(true);
        const fetchRepos = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok)
                    throw new Error("Data Can't Fetch.");
                const data = await response.json();
                if (data) {
                    console.log("this is data", data);
                    setRepos(data.items);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error.message);
                setErrorMsg(error.message);
                setLoading(false);
            }
        };
        fetchRepos();

    }, []); */

    if (loading)
        <h1>Loading....</h1>;
    //  if (errorMsg)
    //      return <h1>Error {errorMsg}</h1>;

    return (
        // <div className='users-cont' >
        <div className={`${navigation.state === "loading" ? "loading" : ""} users-cont`} >
            {
                repos ?
                    repos.map((eachRepo) => (

                        <div className="user-card-count" key={eachRepo.id}>

                            <img
                                src={eachRepo.owner.avatar_url}
                                alt="userAvatar"
                                className="user-avatar"
                            />
                            <span className="username">{eachRepo.name}</span>
                            <span className="repo-lang-span">Language: {eachRepo.language}</span>
                            <div>
                                By: <button className="repo-owner">{eachRepo.owner.login}</button>
                            </div>

                            <button className='btn'>View Repo</button>

                        </div>


                    ))
                    : <p>Repos Not Found.</p>
            }
        </div>
    );
};

export default Home;