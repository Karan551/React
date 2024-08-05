import React, { useState } from 'react';
import { Button, Input, Logo } from "./index";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../feature/auth/authSlice";


function Login() {
    const [errorMsg, setErrorMsg] = useState("");
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    // const formSubmit = (data) => {
    //     console.log("this is my data via form", data);


    // };

    const formLogin = async (loginFormData) => {
        console.log("this is login Form data :", loginFormData);
        setErrorMsg("");
        try {
            const session = await authService.loginUser(loginFormData);

            console.log("My session is", session);
            if (session) {
                const userData = await authService.getCurrentUser();

                if (userData) {
                    dispatch(authLogin(userData));
                    // here we will navigate
                    // navigate("/");


                }
            }

        } catch (error) {
            console.log("Login Form Error::", error.message);
            setErrorMsg(error.message);

        }

    };


    return (
        <div className='flex justify-center items-center w-full'>
            <div className='mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 my-2 bg-gray-50/30'>
                <div className='flex justify-center mb-2'>
                    <span className='inline-block w-full max-w-[100px]'>

                        <Logo width='100%' />

                    </span>
                </div>

                <h2 className='text-center font-semibold text-3xl leading-tight'>Sign into your account :- </h2>


                {errorMsg && <p className='text-red-600 mt-8 text-center'>{errorMsg}</p>}

                <form className='mt-8'
                    onSubmit={handleSubmit(formLogin)}

                >

                    <div className='space-y-5'>

                        <Input
                            label="Email :-"
                            type="email"
                            placeholder="Enter Your Email...."
                            className="text-2xl"
                            autoComplete="username"

                            {
                            ...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                        "Email address must be a valid address",
                                }
                            })
                            }

                        />

                        <Input
                            label="Password :-"
                            type="password"
                            placeholder="Enter Your Password...."
                            className="text-2xl"
                            autoComplete="current-password"

                            {...register("password", {
                                required: true,

                            })}

                        />


                        <Button btnText="Sign In" type="submit" className="w-full" />
                    </div>


                    <p className='text-center mt-2 text-xl text-black/60'>Don&apos;t Have an Account ? &nbsp;
                        {/* here we will use link <Link> up </Link> */}
                        <span className='text-blue-500 font-semibold hover:text-blue-700 hover:cursor-pointer hover:underline'>Sign up</span></p>
                </form>
            </div>
        </div>
    );
}

export default Login;
