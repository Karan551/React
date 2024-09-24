import { useState } from "react";


function App() {

  const [inputValue, setInputValue] = useState("");
  const numberArray = [
    "CLEAR", "+", "-", "x", "/",
    9, 8, 7, 6, 5,
    4, 3, 2, 1, 0,
    ".", "=", "mod"

  ];

  const handleClick = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.innerText)

    setInputValue(prev => prev += event.target.innerHTML);
    if (event.target.innerHTML === 'CLEAR') {
      setInputValue('');
    }
    else if (event.target.innerHTML == '=') {
      // setInputValue(inputValue&&inpu)
      if (!inputValue) {

        alert("Please Write Something in input box.");
        setInputValue('');

      } else if (inputValue.toLocaleLowerCase() == 'x') {

        setInputValue(inputValue.replaceAll('x', '*'));


      }
      else {

        setInputValue(eval(inputValue));
        // console.log("Please write something")
        console.log("Result is ", inputValue && eval(inputValue));
      }
    }
  };


  // const numberArrays = Array(10).fill('empty');
  // console.log(numberArrays);
  // console.log("this is input value", inputValue);
  return (
    <>
      <main className="min-h-screen flex flex-col bg-[#212121] text-white items-center">


        <h1 className="text-5xl font-Notos text-center bg-gray-500/50 text-orange-500 p-4  my-4">Calculator With React</h1>
        <section className="w-1/2 bg-gray-500 h-[25rem] px-6 py-3 rounded-lg my-4">
          <input
            type="text"
            value={inputValue}
            readOnly
            placeholder="Enter a Number...."
            className="text-3xl placeholder:text-gray-400/50 px-6 py-4 rounded-lg font-semibold w-full focus:border focus:border-indigo-600 outline-none text-black"
          />
          <div className="grid grid-cols-4 gap-2 my-4">
            {
              numberArray.map((element, index) => (
                <button key={index} className="px-2 py-2 bg-gray-50 text-black rounded-lg font-semibold
                text-2xl btn-shadow focus:bg-orange-500 focus:text-white
                "
                  onClick={handleClick}
                >{element}</button>
              ))
            }
          </div>

        </section>

      </main>
    </>
  );
}

export default App;
