import React, { useCallback, useEffect, Suspense } from 'react';
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "../index";
import dbService from "../../appwrite/dbConfig";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';



export default function PostForm({ post }) {

    console.log("this is post in post form::", post);
    // console.log("this is post in post title::", post?.title);

    const { handleSubmit, register, control, getValues, setValue, watch } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        }
    });

    const userData = useSelector((state) => state.myblog.userData);
    const navigate = useNavigate();
    console.log("This is user data::", userData);

    const onSubmit = async (data) => {

        // console.log("form is submitted.");
        // console.log("this is data in form::", data);
        // console.log("This is image ::", data['image'][0]);
        // console.log("This is image ::???", data['image'][0]?.name);

        // if post is already then do this (To update a post)
        console.log('this is post to update post:::-', post);
        if (post) {
            console.log('this is post to update post:::-', post);
            // To upload a new img file
            const file = await dbService.uploadFile(data["image"][0]);

            // To remove old img
            if (file) {
                await dbService.deleteFile(post.featureImg);
            }

            //  To update a post
            const dbPost = await dbService.updatePost(post.$id, { ...data, featuredImage: file ? file.$id : undefined });

            if (dbPost) {
                // TODO to navigate user via react-router
                navigate(`/post/${dbPost.$id}`);
            }

        } else {
            // To create a new post 

            const file = await dbService.uploadFile(data["image"][0]);



            // console.log("this is data:: ---for creating post::", data);

            if (file) {
                const fileID = file.$id;
                data.featuredImage = fileID;

                // console.log("this is data:: ???---??? for creating post::", data);

                const dbPost = await dbService.createPost({ ...data, userId: userData?.$id });

                // console.log("this is dbPost for new post::", dbPost);

                if (dbPost) {

                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }

    };



    const slugTransForm = useCallback((value) => {
        if (value && typeof (value) === "string") {
            console.log("this is your value ::", value);
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d]+/g, "-")
                .replace(/\s/g, "-");
        }
        return "";


    }, []);


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransForm(value.title), { shouldValidate: true });
            }

            return () => subscription.unsubscribe();
        });

    }, [watch, setValue, slugTransForm]);



    return (
        <form className="flex flex-wrap my-2 bg-gray-200 px-4 py-2 max-w-7xl rounded-lg space-x-6 w-full"

            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="w-full md:w-2/3">


                <Input
                    label="Title :"
                    placeholder="Enter Your Blog Title:"
                    cssClass="mb-4 text-lg md:text-2xl"

                    {...register("title", {
                        required: true
                    })}
                />

                <Input
                    label="Slug :"
                    placeholder="Enter Your Slug:"
                    cssClass="mb-4 text-lg md:text-2xl"

                    {...register("slug", { required: true })}

                    onInput={(e) => setValue("slug", slugTransForm(e.currentTarget.value), { shouldValidate: true })}
                    

                />
                <div className='w-full'>
                    <RTE
                        label="Content :"
                        name="content"
                        control={control}
                        defaultValues={getValues("content")}
                    />
                </div>
            </div>

            <div className="w-full md:w-1/4 ">
                <Input
                    label="Featured Image:"
                    type="file"
                    accept=".png, .jpg, .jpeg, .gif "
                    cssClass="mb-4"
                    {...register("image", { required: true })}
                />
                <Select
                    label="Status"
                    cssClass="mb-4 w-full text-lg md:text-2xl"

                    options={["inactive", "active"]}
                    {...register("status", { required: true })}

                />
                <Button
                    children={"Post"}
                    cssClass="w-full text-lg md:text-2xl"
                    type="submit"
                />
            </div>
        </form>
    );
}


function Spinner() {
    return <h1 className='loader'>Loading...</h1>;
}