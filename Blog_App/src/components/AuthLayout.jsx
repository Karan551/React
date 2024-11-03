import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({ children, authentication = true }) {
    const [loader, setLoader] = useState(null);
    const navigate = useNavigate();

    const authStatus = useSelector((state) => state.myblog.status);


    useEffect(() => {

        // TODO: we will come back here ::
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication]);
    return loader ? <h1>Loading...</h1> : <>{children}</>;
}
