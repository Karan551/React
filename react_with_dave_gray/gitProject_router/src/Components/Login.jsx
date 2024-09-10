import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsLogged, setUsername }) => {
    const [errorMsg, setErrorMsg] = useState("");
    const [loginUserName, setLoginUserName] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const dummyUserObject = {
        username: "Kolosafo",
        password: "12345",
    };

    const handleLogin = (event) => {
        event.preventDefault();

        if (loginUserName === dummyUserObject.username && password === dummyUserObject.password) {
            setIsLogged(true);
            setUsername(loginUserName);
            navigate("/authProfile");
        } else {
            setErrorMsg("Invalid Credentials");
        }
    };



    return (
        <form className='login-form'>
            <span className="error-span">{errorMsg}</span>

            <label htmlFor="username" className="login-label">
                Username
            </label>

            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter User Name...."
                value={loginUserName}
                onChange={(e) => setLoginUserName(e.target.value)}
                className="login-inp"
            />

            <label htmlFor="password" className="login-label">
                Password
            </label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;