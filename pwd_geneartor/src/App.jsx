import { useState, useCallback, useEffect, useRef } from 'react';


function App() {

  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const chars = "!@#$%^&*()_<>{}][";

  // DONE: project completed

  const [pwd, setPwd] = useState("");
  const [btnText, setBtnText] = useState("copy");
  const [pwdLength, setPwdLength] = useState(6);
  const [isDigit, setIsDigit] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {

    let generatedPwd = "";
    if (isDigit) str += digits;
    if (isCharAllowed) str += chars;

    for (let index = 0; index < pwdLength; index++) {
      const randomNumber = Math.floor(Math.random() * str.length);
      generatedPwd += str[randomNumber];

    }

    setPwd(generatedPwd);
  }, [pwdLength, isDigit, isCharAllowed,]);

  const handleCopy = () => {
    passwordRef.current?.select();
    setBtnText("copied");
    window.navigator.clipboard.writeText(pwd);
  };


  useEffect(() => {
    passwordGenerator();
    setBtnText("copy");
  }, [pwdLength, isDigit, isCharAllowed, passwordGenerator]);


  return (
    <>
      <main className="w-full min-h-screen shadow-md rounded-lg bg-gray-800  grid items-center">
        <section className="px-8 py-6 rounded-xl bg-gray-200 w-1/2 mx-auto min-h-1/3">
          <h1 className="text-center text-3xl text-orange-500 mb-4 font-semibold ">Password Generator</h1>
          <div>
            <input
              type="text"
              className=" px-4 py-3 rounded-l-xl md:w-4/5  border-indigo-600 border outline-none inline-block text-xl text-black"
              value={pwd}
              ref={passwordRef}
              readOnly
            />
            <button
              onClick={handleCopy}
              className="inline-block text-base px-8 py-4 rounded-r-xl bg-blue-600 hover:bg-blue-800 text-white font-semibold cursor-pointer uppercase"
            >{btnText}</button>
          </div>
          <section className="flex justify-between mt-4">
            <div className="text-lg">
              <input
                type="range"
                min={6}
                max={100}
                value={pwdLength}
                onChange={(e) => setPwdLength(e.target.value)}
                className="cursor-pointer"
                id="length"
              />
              <label htmlFor="length" className="px-2 text-xl">Length
                :{pwdLength}
              </label>
            </div>
            <div>

              <input
                type="checkbox"
                id="digit"
                value={isDigit}
                onChange={() => setIsDigit((prev) => !prev)}
              />
              <label htmlFor="digit" className="px-2 text-xl" >Number</label>
            </div>

            <div>

              <input
                type="checkbox"
                id="char"
                value={isCharAllowed}
                onChange={() => setIsCharAllowed((prev) => !prev)}
              />
              <label htmlFor="char" className="px-2 text-xl">Character</label>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
