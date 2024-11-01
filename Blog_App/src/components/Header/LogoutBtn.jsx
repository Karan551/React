import React from 'react';
import authService from "../../appwrite/auth";
import { useDispatch } from 'react-redux';
import { logout as userLogout } from "../../features/blog/blogSlice";

export default function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        authService.logout()
            .then(() => dispatch(userLogout()))
            .catch((error) => console.log("Error in handleLogout:: ", error));
    };

    return (

        <button className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
            onClick={handleLogout}
        >
            Logout
        </button>
    );
}
