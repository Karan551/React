import { useState } from 'react';
// import Button from './Components/Button';
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-200 flex flex-wrap justify-center" style={{ backgroundColor:color }}>
        <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 bg-white mx-4 rounded-xl'>
          <div className='flex flex-wrap space-x-3 justify-center  my-1 px-3 py-1'>


          <button onClick={()=>{return(setColor("red"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-red-500 hover:text-slate-300 hover:scale-110 hover:bg-red-700'>Red</button>

          <button onClick={()=>{return(setColor("green"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-green-600 hover:text-slate-300 hover:scale-110 hover:bg-green-900'>Green</button>

          <button onClick={()=>{return(setColor("blue"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-blue-500 hover:text-slate-300 hover:scale-110 hover:bg-blue-800' >Blue</button>

          <button onClick={()=>{return(setColor("black"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-[#333] hover:text-slate-300 hover:scale-110 hover:bg-black'>Black</button>

          <button onClick={()=>{return(setColor("pink"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-pink-500 hover:text-slate-300 hover:bg-pink-800 hover:scale-110' >Pink</button>
          
          <button onClick={()=>{return(setColor("gray"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] hover:text-slate-300 hover:scale-110' style={{backgroundColor:"gray"}}>Gray</button>

          <button onClick={()=>{return(setColor("white"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#333] border border-black hover:text-slate-500 hover:scale-110' style={{backgroundColor:"white"}}>White</button>
          
          <button onClick={()=>{return(setColor("lavender"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#333] bg-[lavender] border border-blue-300 hover:bg-zinc-400 hover:scale-110' style={{backgroundColor:"lavender"}}>Lavender</button>

          <button onClick={()=>{return(setColor("yellow"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] border border-blue-300 bg-yellow-500 hover:scale-110 hover:bg-yellow-800'>Yellow</button>

          <button onClick={()=>{return(setColor("olive"))}}
          className='inline-block px-6 py-4 rounded-2xl  text-2xl text-[#f5f5f5] bg-purple-600 border border-blue-300
          hover:scale-110 hover:bg-[olive]'>Olive</button>

      

          </div>
        </div>
      </div>
    </>
  );
}

export default App;





