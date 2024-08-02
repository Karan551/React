import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./feature/auth/authSlice";
import authService from "./appwrite/auth.js";
import { Header, Footer } from "./Components/index.js";

function App() {

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));

  }, []);

  return !loading ? (
    <>


      <h1 className='text-5xl font-semibold px-2 py-3 bg-orange-500 rounded-lg hover:cursor-pointer hover:text-blue-300 text-center hover:bg-orange-700'>Welcome To Our Mega Project.</h1>



      <Header />
      <Footer />

    </>
  )
    : null;
}

export default App;
