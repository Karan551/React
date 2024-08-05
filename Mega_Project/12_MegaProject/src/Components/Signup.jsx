import React, { useState } from 'react';
import { Button, Input, Logo } from "./index";
import { useForm } from 'react-hook-form';
import authService from "../appwrite/auth";
import { useDispatch } from 'react-redux';
import { login } from "../feature/auth/authSlice";
import { useNavigate } from 'react-router-dom';




function Signup() {
    const [errorMsg, setErrorMsg] = useState("");
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const signUpFormData = async (formData) => {
        setErrorMsg("");
        try {
            console.log("This is form data", formData);
            const session = await authService.createAccount(formData);

            if (session) {
                const userData = authService.getCurrentUser();
                if (userData) {
                    dispatch(login(userData));
                    // here we will use naviagate 
                    // navigate("/");
                }
            }

        } catch (error) {
            console.log("Error in Create Account ", error.message);
            setErrorMsg(error.message);
        }

    };


    return (
        <div className='w-full flex items-center justify-center'>

            <div className='mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 my-2 bg-gray-50/30'>
                <div className='flex justify-center mb-2'>
                    <span className='inline-block w-full max-w-[100px]'>
                        <Logo width='100%' />
                    </span>
                </div>

                <h2 className='text-center font-semibold text-3xl leading-tight'>Create an account :- </h2>

                {
                    errorMsg && <p className='text-red-600 mt-8 text-center'>{errorMsg}</p>
                }

                <form className='mt-8' onSubmit={handleSubmit(signUpFormData)}>
                    <div className='space-y-5'>
                        <Input
                            label="Name :-"
                            placeholder="Enter Your Name...."
                            className="text-2xl"
                            {
                            ...register("name", {
                                required: true
                            })
                            }

                        />
                        <Input
                            label="Email :-"
                            placeholder="Enter Your Email...."
                            type="email"
                            className="text-2xl"
                            autoComplete="username"
                            {
                            ...register("email", {
                                required: true
                            })
                            }
                        />
                        <Input
                            label="Password :-"
                            placeholder="Enter Your Password...."
                            type="password"
                            className="text-2xl"
                            autoComplete="current-password"
                            {
                            ...register("password", {
                                required: true
                            })
                            }

                        />
                        <Button
                            btnText="Create Account"
                            className='w-full'
                            type='submit'
                        />
                    </div>


                    <p className='text-center mt-2 text-xl text-black/60'>Already Have an Account ? &nbsp;
                        {/* here we will use link <Link>Login </Link> */}
                        <span className='text-blue-500 font-semibold hover:text-blue-700 hover:cursor-pointer hover:underline'>Login</span></p>
                </form>

            </div>

        </div>
    );
}

export default Signup;
