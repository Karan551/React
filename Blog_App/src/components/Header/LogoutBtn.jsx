import React, { useState } from 'react';
import authService from "../../appwrite/auth";
import { useDispatch } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
import { logout as userLogout } from "../../features/blog/blogSlice";

export default function LogoutBtn() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLogout = () => {
        authService.logout()
            .then((response) => {
                if (response.status) {
                    dispatch(userLogout());
                    console.log("This is data returned by loggout::", response);

                    toast.success("Logout Succesfully.", {
                        duration: 1500,
                        position: "top-center",
                        icon: "✅",
                        className: "flex text-2xl font-semibold px-2",
                        ariaProps: {
                            role: "status",
                            "aria-live": "polite",
                        },
                    });

                }
            }
            )
            .catch((error) => {
                setLoading(false);
                console.log("Error in handleLogout:: ", error);
            });
    };




    return (

        <button className="inline-bock px-6 py-2 duration-200 hover:bg-red-500 rounded-full"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}
