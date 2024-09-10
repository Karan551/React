import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const RepoDetail = () => {

    const [gitRepoData, setGitRepoData] = useState({});
    const { name, username } = useParams();

    useEffect(() => {
        setLoading(true);
        const getGitUser = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${username}/${name}`);
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
    }, [name, username]);

    if (loading)
        return <h1>Loading....</h1>;

    if (errorMsg)
        return <h1>Error : {errorMsg}</h1>;
    return (
        <div>
            <div className="top-cont">
                {gitRepoData ? (
                    <>
                        <img
                            className="avatar-img"
                            src={gitRepoData.owner.avatar_url}
                            alt=""
                            style={{ width: "30%" }}
                        />
                        <div className="name-cont">
                            <span className="username">
                                Owner:{" "}
                                <Link to={`/users/user/${gitRepoData.owner.login}`}>
                                    {gitRepoData.owner.login}
                                </Link>
                            </span>
                            <span className="repo-lang-span">
                                Language: {gitRepoData.language}
                            </span>
                            <h2>{gitRepoData.name}</h2>
                            <div className="follow-cont">
                                <a
                                    className="view-ongit-a"
                                    href={gitRepoData.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    View on GitHub
                                </a>
                                <div>
                                    <input
                                        className="clone-url-inp"
                                        type="text"
                                        value={gitRepoData.clone_url}
                                    />
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText(gitRepoData.clone_url);
                                            setCloneCopy((isCopied) => !isCopied);
                                            setTimeout(
                                                () => setCloneCopy((isCopied) => !isCopied),
                                                3000
                                            );
                                        }}
                                    >
                                        {cloneCopy ? "Copied" : "Clone"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        </div>
    );
};

export default RepoDetail;