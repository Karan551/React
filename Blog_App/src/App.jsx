import { useEffect, useState } from "react";
import { Header, Footer, Login, SignUp, RTE, MyRTE, PostForm } from "./components/index";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/blog/blogSlice";
import { Outlet, useNavigation } from "react-router-dom";

// import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log("error in get user::", error))
      .finally(() => setLoading(false));


  }, []);

  // TODO: review css 37
  return !loading ? (

    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full">
        <Header />
        
        <main className={navigation.state === "loading" ? "loading" : "" + "text-2x"}>
          <Outlet />
        </main>

        <Footer />
      </div>

    </div>
  )
    : null;
}

export default App;
