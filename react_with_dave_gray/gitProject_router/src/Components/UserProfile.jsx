import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserProfile = () => {

    const [gitUserData, setGitUserData] = useState({});
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const { userId } = useParams();

    useEffect(() => {
        setLoading(true);
        const getGitUser = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${userId}`);
                if (!response.ok)
                    throw new Error("Data can't be fetched");

                const data = await response.json();
                if (data) {
                    setGitUserData(data);
                    setLoading(false);
                }

            } catch (error) {
                setErrorMsg(error.message);
                console.log(error.message);
                setLoading(false);
            }

        };

        getGitUser();
    }, []);

    if (loading)
        return <h1>Loading....</h1>;

    if (errorMsg)
        return <h1>Error : {errorMsg}</h1>;


    return (
        <div className="user-profile-main-cont">
            <div className="top-cont">
                <img
                    src={gitUserData.avatar_url}
                    className="user-avatar-img"
                    alt="user-img"
                />{" "}
                <div className="name-cont">
                    <span>{gitUserData.login}</span>
                    <h2>{gitUserData.name}</h2>
                    <h3>{gitUserData.location}</h3>
                    <div className="follow-cont">
                        <span className="followers">
                            Followers: {gitUserData.followers}
                        </span>
                        <span>Following: {gitUserData.following}</span>
                    </div>
                    <Link
                        className="view-ongit-a"
                        to={gitUserData.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on GitHub
                    </Link>
                    <div>

                        <Link className='link' style={{margin:"50px 5px"}} to={"/"}>Go To Home Page</Link>
                    </div>
                </div>
            </div>
            <div className="bottom-cont">
                <h3>{gitUserData.bio}</h3>
            </div>

        </div>
    );
};

export default UserProfile;