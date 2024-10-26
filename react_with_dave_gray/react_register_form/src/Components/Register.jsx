import React, { useEffect, useRef, useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaTimes, FaInfoCircle } from "react-icons/fa";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@$%#]).{8,24}$/;

export default function Register() {

    const userRef = useRef();

    const [userName, setUserName] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);



    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);


    const [confirmPwd, setConfirmPwd] = useState("");
    const [matchConfirmPwd, setMatchConfirmPwd] = useState(false);
    const [matchConfirmPwdFocus, setMatchConfirmPwdFocus] = useState(false);


    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(userName));
    }, [userName]);

    // ---
    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setMatchConfirmPwd(pwd === confirmPwd);
    }, [pwd, confirmPwd]);

    console.log("this is username", !userName, userName);
    return (
        <section>
            <h1 className="text-center"> Register Form</h1>


            <form >
                <label htmlFor="username">UserName:

                    <FaCheck
                        className={validName ? "valid" : "hide"}
                    />
                    <FaTimes
                        className={validName || !userName ? "hide" : "invalid"}
                    />

                </label>
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    ref={userRef}
                    required
                    placeholder="Enter Your User Name...."
                    value={userName}
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"

                    onChange={(e) => setUserName(e.target.value)}
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && userName && !validName ? "instructions" : "offscreen"}>
                    <FaInfoCircle />
                    4 to 24 characters.<br />
                    Must begin with a letter.<br />
                    Letters, numbers, underscores, hyphens allowed.
                </p>

                <label htmlFor="password">Password

                    <FaCheck
                        className={validPwd ? "valid" : "hide"}
                    />
                    <FaTimes
                        className={validPwd || !pwd ? "hide" : "invalid"}
                    />

                </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    required
                    placeholder="Enter Your Password...."
                    value={pwd}
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onChange={(e) => setPwd(e.target.value)}
                    onFocus={(e) => setPwdFocus(true)}
                    onBlur={(e) => setPwdFocus(false)}

                />
                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                    <FaInfoCircle />

                    8 to 24 characters.<br />
                    Must include uppercase and lowercase letters, a number and a special character.<br />
                    Allowed special characters:&nbsp;
                    <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>



                {/* -----confirm password-------- */}

                <label htmlFor="confirm_password">Confirm Password
                    <FaCheck
                        className={matchConfirmPwd && confirmPwd ? "valid" : "hide"}
                    />
                    <FaTimes
                        className={matchConfirmPwd || !confirmPwd ? "hide" : "invalid"}
                    />



                </label>
                <input
                    type="password"
                    id="confirm_password"
                    autoComplete="new-password"
                    required
                    placeholder="Confirm Your Password...."
                    value={confirmPwd}
                    aria-invalid={matchConfirmPwd ? "false" : "true"}
                    aria-describedby="confirmnote"

                    onChange={(e) => setConfirmPwd(e.target.value)}
                    onFocus={() => setMatchConfirmPwdFocus(true)}
                    onBlur={() => setMatchConfirmPwdFocus(false)}
                />
                <p
                    id="confirmnote"
                    className={matchConfirmPwdFocus && !matchConfirmPwd ? "instructions" : "offscreen"}
                >Must match the first password input field.</p>


                <button
                    disabled={!validName || !validPwd || !matchConfirmPwd ? true : false}

                >Signup</button>
            </form>
            <p>Already Registerd ?<a href="#">Sign In</a></p>
        </section>
    );
}
