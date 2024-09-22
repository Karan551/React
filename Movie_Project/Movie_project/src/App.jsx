import { useNavigate } from 'react-router-dom';

import { useData } from './Context/MyContext';
import Heading from './Components/Heading';

function App() {

  const { search, setSearch } = useData();
  const navigate = useNavigate();

  const backgroundPicture = 'https://cdn.pixabay.com/photo/2024/09/17/01/32/forest-9052633_1280.jpg';

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/view");
  };


  return (
    <>

      <section className="w-full min-h-screen flex flex-wrap justify-center flex-col items-center space-y-2 bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${backgroundPicture})`
        }}
      >

        <h1 className="px-4 py-5 mb-2 rounded-lg bg-gray-200/80 text-2xl font-semibold sm:text-5xl dark:bg-gray-500/60 dark:text-gray-50 text-center">Welcome To Know Movie Infomation Website.</h1>
        <div className=" w-full bg-gray-200 mx-auto max-w-md border border-gray-100/50 rounded-lg px-6 py-4 backdrop:blur-sm dark:bg-gray-500 dark:text-white">

          <Heading />
          <form onSubmit={handleSubmit}
          >
            <div className='w-full mb-2'>
              <input type="text"
                required
                className="block  p-4 text-lg 
          w-full
    sm:text-2xl  text-gray-900 border border-gray-300 
    rounded-lg
   bg-gray-50 focus:ring-blue-500 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400
    dark:text-white dark:focus:ring-white dark:focus:border-white focus:border-indigo-600 outline-none"
                placeholder="Enter Movie Name Here...."

                value={search}
                onChange={(e) => setSearch(e.target.value)}

              />
            </div>
            <button
              type='reset'

              className='block my-2 px-6 py-4
                  w-full 
  bg-red-500 text-white hover:bg-red-700 font-semibold 
  text-base sm:text-2xl rounded-lg
    outline-none border border-gray-300/50'
              onClick={() => setSearch('')}
            >

              Clear Input
            </button>

            <button
              type='submit'
              className='block my-2 px-6 py-4
              w-full text-white
       bg-teal-500 hover:bg-teal-700 
       font-semibold  rounded-lg
        text-base sm:text-2xl
    outline-none border border-gray-300/50'>
              Submit</button>

          </form>
        </div>

      </section>
    </>
  );
}

export default App;
