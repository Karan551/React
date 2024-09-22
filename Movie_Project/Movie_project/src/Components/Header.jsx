

import { NavLink, useLocation} from 'react-router-dom';

import ThemeButton from './ThemeButton';

function Header() {

    const location = useLocation();
 
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap md:flex-row flex-col items-center justify-between mx-auto p-4">

                        <div className="flex justify-between  md:order-1 w-full sm:w-1/2">

                            
                            <div className='flex justify-betwee w-full'>

                                <NavLink to={"/"} className="inline-block py-2 px-3 text-white text-lg md:text-xl bg-blue-700 rounded md:bg-transparent md:text-blue-500 md:p-0 md:dark:text-blue-500 hover:text-blue-700" aria-current="page">Home</NavLink>
                               
                                    <ThemeButton />
                              
                            </div>

                        </div>


                        <div className="items-center justify-between hidden w-1/2 md:flex md:w-auto md:order-2" id="navbar-search">

                            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                                {
                                    location.pathname !== '/' &&
                                    <li>
                                        <NavLink to={"view"}


                                            className="block py-2 px-3 text-sm md:text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">View</NavLink>
                                    </li>
                                }

                                
                            </ul>
                        </div>

                    </div>
                </nav>


            </header>

        </>
    );
}

export default Header;
