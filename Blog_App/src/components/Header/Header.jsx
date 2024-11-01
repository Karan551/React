
import { Container, Logo } from "../index";
import { useSelector } from "react-redux";

import LogoutBtn from "./LogoutBtn";

export default function Header() {
    const authStatus = useSelector((state) => state.myblog.status);
    // console.log("this is auth status::", authStatus);
    // TODO: To navigate user via onclick
    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ];
    return (
        <header className='py-3 shadow bg-gray-500 text-white font-semibold text-xl'>
            <Container>
                {/* <h1 className='text-blue-500 text-4xl text-center bg-orange-400 p-4'>Mega Blog Project</h1> */}
                <nav className="flex">
                    <div className="mr-4">
                        <a href="#">
                           <Logo/>
                        </a>
                    </div>

                    <ul className="flex ml-auto">
                        {
                            navItems.map((eachItem) => (
                                eachItem.active ?
                                    <li key={eachItem.name}>
                                        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-500 rounded-full'>{eachItem.name}</button>
                                    </li>

                                    : null
                            ))
                        }
                        {
                            authStatus && <li><LogoutBtn /></li>
                        }
                    </ul>
                </nav>
            </Container>
        </header>
    );
}
