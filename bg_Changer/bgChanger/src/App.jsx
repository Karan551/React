import { useState } from 'react';
import Button from './Components/Button';
import colorNames from 'colornames';
function App() {
  const [color, setColor] = useState("");
  const [btnText, setBtnText] = useState("");
  const colorArray = ["red", "green", "black", "blue", "olive", "gray"];


  return (
    <>
      <section className="w-full h-screen duration-200 flex flex-wrap justify-center items-center" style={{ backgroundColor: color ? color : "coral", minHeight: "100vh" }}>

        {
          btnText && <div className={`${colorArray.includes(color.toLowerCase()) ? "text-white" : ""} font-semibold`}>
            <h1 className="text-7xl">Color :- {btnText ? btnText : ""}</h1>
            <p className="text-start px-4 py-3 my-2 text-xl">Hex Value Is : {colorNames(color)}</p>
          </div>
        }
        <div className='fixed flex flex-wrap justify-center bottom-3 inset-x-0 bg-white mx-4 rounded-xl'>
          <div className='flex flex-wrap space-x-3 justify-center  my-1 px-3 py-1'>

            <Button
              styles={'bg-red-500 hover:bg-red-700'}
              btnText={"red"}
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-green-500 hover:bg-green-700'}
              btnText='green'
              setBtnText={setBtnText}
              setColor={setColor}

            />
            <Button
              styles={'bg-blue-500 hover:bg-blue-700'}
              btnText='blue'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-black hover:bg-[#212121]'}
              btnText='black'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-pink-500 hover:bg-pink-700'}
              btnText='pink'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-gray-500 hover:bg-gray-700'}
              btnText='gray'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-slate-100 text-black hover:bg-gray-700'}
              btnText='white'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-[lavender] text-black hover:hover:bg-gray-200 hover:text-[#212121] '}
              btnText='Lavender'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-yellow-400 hover:text-black hover:bg-yellow-500 text-[#212121]'}
              btnText='yellow'
              setBtnText={setBtnText}
              setColor={setColor}
            />
            <Button
              styles={'bg-purple-600 hover:text-black hover:bg-[olive] '}
              btnText='olive'
              setBtnText={setBtnText}
              setColor={setColor}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;





