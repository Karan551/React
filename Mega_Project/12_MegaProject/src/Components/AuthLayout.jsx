import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";




function Protected({ children, authentication = true }) {
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => state.auth.status);

    const navigate = useNavigate();

    useEffect(() => {
        /*
        if (!authStatus) {
           navigate("/login");
       } else {
           navigate("/");
        // it is similar to the below funcationality.
       }
    */
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }


        setLoader(false);

    }, [authStatus, navigate, authentication]);

    return (

        loader ? <h1>Loading.....</h1> : <>children</>
    );
}

export default Protected;
