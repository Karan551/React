import React, { useState } from 'react';
import { Input, Button, Logo } from "./index";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import authService from "../appwrite/auth";

export default function ForgotPwd() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errMsg, setErrMsg] = useState("");
    const login = async (data) => {
        console.log("this is data in forgot pwd::", data);
      
        const { email } = data;
        console.log("This is email", email);
        // const result = await authService.checkUser(email);
        // console.log("this is result of appwrite::", result);

        const result2=await authService.getCurrentUser()
        console.log("this is result of appwrite::", result2);
        /*   const response = authService.checkUser(email)
              .then((data) => console.log("this is response of appwrite::", data))
              .catch((err) => console.log("error in check user in appwrite service::", err.message));
  
          console.log("this is response of appwrite-------- ::", response); */
    };


    return (
        <section className="flex items-center justify-center w-full">

            <div className="mx-auto flex items-center justify-center flex-col w-full max-w-lg md:max-w-2xl bg-gray-100 rounded-xl px-5  py-3 border border-black/50 my-3 bg-cover bg-no-repeat "

                style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2021/08/07/19/49/cosmea-6529220_960_720.jpg")` }}
            >


                <h2 className="text-center text-4xl font-bold leading-tight text-white">Forgot Password</h2>

                {errMsg && <div className="flex justify-between bg-red-500 w-full px-4 py-2 text-white rounded-lg my-2"> <div className="text-center py-2">{errMsg} </div> <div
                    className="flex justify-center items-center cursor-pointer shadow-xl px-4 py-2 bg-white text-black rounded-full w-10 h-10"
                    role='button'
                    onClick={() => setErrMsg("")}
                >X</div>

                </div>}

                <form className="bg-gray-100/80 p-4 my-6 rounded-lg backdrop-blur-sm max-w-lg w-full mx-auto border border-gray-100 text-base md:text-2xl"
                    onSubmit={handleSubmit(login)}
                >
                    <Input
                        type="email"
                        placeholder="Enter Your Email :"
                        label="Email :"
                        cssClass="mb-4"
                        autoComplete="username"
                        {...register("email", {
                            required: "Email address is required.",
                            validate: {
                                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />

                    {errors.email && <p role="alert" className="text-white bg-red-500/80 p-2 rounded-lg text-base font-semibold mb-2">{errors.email?.message}</p>}



                    <Button
                        cssClass="my-4 cursor-pointer w-full text-center"

                        type='submit'
                        children={"Submit"}
                        bgColor='bg-teal-500'
                    />


                    <p className="my-2 text-center text-xl text-black">Don't Have an account ? Sign Up <Link to="/signup" className="hover:underline text-blue-500 hover:text-blue-700">Here</Link></p>
                </form>

            </div>
        </section>
    );
}
