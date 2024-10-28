import { useEffect, useState } from "react";
import { Header, Footer } from "./components/index";
import authService from "./appwrite/auth";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/blog/blogSlice";

// import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

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

  return !loading ? (

    <div className="min-h-screen flex  flex-col flex-wrap conten-between bg-gray-400">
      <Header />
     
        <main className="flex-grow grid place-content-center text-3xl">
          main components
        </main>
      
      <Footer />
    </div>
  )
    : null;
}

export default App;
