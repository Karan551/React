import React, { useEffect, useState } from 'react';
import "../styles.css";
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';

export const fetchRepos = async () => {
    const API_URL = "https://api.github.com/search/repositories?q=XXX";
    const response = await fetch(API_URL);
    return response.json();

};

export const getGitUsers = async () => {
    try {
        const response = await fetch("https://api.github.com/users?since=XXXX");

        return response.json();

    } catch (error) {
        console.log("Error ", error.message);
    }


};



const User = () => {
    // const [gitUser, setGitUser] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const gitUser = useLoaderData();
    const navigation = useNavigation();

    const navigate = useNavigate();
    /*   useEffect(() => {
          setLoading(true);
          const getGitUsers = async () => {
  
              try {
                  const response = await fetch("https://api.github.com/users?since=XXXX");
                  if (!response.ok)
                      throw new Error("Data Can not Be Fetch.");
  
                  const data = await response.json();
                  if (data) {
                      setGitUser(data);
                      setLoading(false);
                      console.log('this is upcoming data', data);
                  }
  
              } catch (error) {
                  setErrorMsg(error.message);
                  setLoading(false);
              }
          };
  
          getGitUsers();
      }, []);
   */


    if (loading)
        return <h1>Loading....</h1>;

    if (errorMsg)
        return <h1>Error : {errorMsg}</h1>;

    return (
        <div
            style={{ marginTop: "50px" }}
            className={navigation.state === "loading" ? "loading " : ""}>
            {" "}
            <div className="users-cont">
                {gitUser ? gitUser.map((user) => (
                    <div className="user-card-cont2 user-card" key={user.id}>



                        <img
                            src={user.avatar_url}
                            alt="userAvatar"
                            className="user-avatar"
                        />
                        <div className='content-container'>
                            <span className="username">{user.login}</span>
                            <div>

                                <button
                                    className="view-btn btn"
                                    onClick={() => navigate(`/users/user/${user.login}`)}

                                >View User</button>
                            </div>
                        </div>
                    </div>
                ))
                    : <p>Error : {errorMsg}</p>
                }
            </div>
        </div>
    );
};

export default User;