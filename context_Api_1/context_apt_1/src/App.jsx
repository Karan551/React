import Login from "./Components/Login";
import Profile from "./Components/Profile";
import UserContextProvider from "./Context/UserContextProvider";
import "./index.css"
function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center">React With Chai Read Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
