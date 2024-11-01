import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Input, Button, Logo } from "./index";
import authService from '../appwrite/auth';
import { login } from "../features/blog/blogSlice";
import { useDispatch } from "react-redux";

export default function SignUp() {
  const [errMsg, setErrMsg] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();

  const handleSignUp = async (data) => {
    try {
      console.log("this is data::", data);
      const user = await authService.createAccount(data);

      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          // TODO: Here we will navigate to '/' component via router
        }
      }
    } catch (error) {
      console.log("Error in Signup component::", error.message);
      setErrMsg(error.message);
    }

  };

  return (
    <section className="flex items-center justify-center w-full">

      <div className="mx-auto flex items-center justify-center flex-col w-full max-w-4xl bg-gray-100 rounded-xl px-4 py-5 border border-black/50 my-2 bg-cover bg-no-repeat "

        style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2023/07/23/08/46/flower-8144644_960_720.jpg")` }}
      >
        <h2 className="text-center text-4xl font-bold leading-tight text-white">Create Your account</h2>

        {errMsg && <div className="flex justify-between bg-red-500 w-full px-4 py-2 text-white rounded-lg my-2"> <p className="text-center py-2">{errMsg} </p> <span
          className="cursor-pointer shadow-xl text-center px-4 py-2 bg-white text-black rounded-full"
          role='button'
          onClick={() => setErrMsg("")}
        >X</span></div>}

        <form className="bg-gray-100/80 px-6 py-4 mt-4 mb-2 rounded-lg backdrop-blur-sm max-w-2xl w-full mx-auto border border-gray-100"
          onSubmit={handleSubmit(handleSignUp)}
        >

          <Input
            type="text"
            placeholder="Enter Your Name :"
            label="Username :"
            cssClass="mb-4"
            autoComplete="username"
            {...register("name", {
              required: "Username address is required.",
            })}
            aria-invalid={errors.name ? "true" : "false"}
          />

          {errors.name && <p role="alert" className="text-white bg-red-500/80 p-2 rounded-lg text-base font-semibold mb-2">{errors.name?.message}</p>}


          {/* ---- */}
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

          <Input
            type="password"
            placeholder="Enter Your Password :"
            label="Password :"
            cssClass="mb-4"
            autoComplete="current-password"
            {...register("password", { required: "Password is required." })}

            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password &&
            <p role="alert"
              className="text-white bg-red-500/80 p-2 rounded-lg text-base font-semibold mb-2"
            >{errors.password?.message}</p>}

          <Button
            cssClass="my-4 cursor-pointer w-full text-center"

            type='submit'
            children={"Sign Up"}
            bgColor='bg-teal-500'
          />

          <p className="my-2 text-center text-xl text-black">Already Have an account ? Login <a href="#" className="hover:underline text-blue-500 hover:text-blue-700">Here</a></p>
        </form>

      </div>
    </section>
  );
}
