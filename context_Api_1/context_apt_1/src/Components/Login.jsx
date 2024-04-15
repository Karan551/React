import React ,{useContext, useState} from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

//   To send data
  const {setUser}=useContext(UserContext)
  // console.log(setUser)
  const handleSubmit = (e) => {
    //
    e.preventDefault()
    setUser({username,password})
    console.log("Button was clicked.");

  };
  //   const

  return (
    <>
      <div className="container">
        <h2 className="text-center">Login :</h2>

        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Enter Your Name:"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => 
            setPassword(e.target.value)}
          placeholder="Password"
        />
        <button 
        className="btn" 
        onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
