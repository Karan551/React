import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='flex flex-col justify-center items-center space-y-4 bg-gray-300 px-4 py-6 rounded-xl'>
        <div className='text-4xl rounded-xl bg-sky-500 p-3 hover:bg-sky-700 hover:text-[#f5f5f5]'>TailWind Test</div>
        <div class="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            class="z-0 h-full w-full rounded-md object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-left">
            <h1 class="text-lg font-semibold text-white">Delba</h1>
            <p class="mt-2 text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
              debitis?
            </p>
            <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Profile →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
