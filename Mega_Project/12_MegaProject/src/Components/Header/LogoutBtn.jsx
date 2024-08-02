import React from 'react';
import authService from "../../appwrite/auth";
import { useDispatch } from 'react-redux';
import { logout } from '../../feature/auth/authSlice';

function LogoutBtn() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        authService.logoutUser()
            .then(() => { dispatch(logout()); })
            .catch((error) => {
                console.log("Error in Header Section Due To Logout", error);
            });
    };


    return (

        <button
            className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={handleLogout}>LogOut</button>

    );
}

export default LogoutBtn;
