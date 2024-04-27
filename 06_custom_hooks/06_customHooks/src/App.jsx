import { useState, useRef } from "react";
import Input from "./Components";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
import Heading from "./Components/Heading";

function App() {
  const backgroundImage = `https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`;

  // This is amount that pass user that he want to convert.
  // date field
  const [date, setDate] = useState("");

  const [amount, setAmount] = useState(0);
  // This is currency that we have to convert another currency.
  const [from, setFrom] = useState("usd");
  // converted currency.
  const [to, setTo] = useState("inr");

  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from, date);
  // To get the keys of currencyInfo (object).
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };
  // This method is used to convert amount.
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };
  return (
    <>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      >
        <Heading />
        <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              {/* This is first input box */}
              <div className="w-full mb-2 border-solid border-2 border-black rounded-lg">
                <Input
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  required={true}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div className=" w-full relative h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 font-semibold -translate-x-1/2  -translate-y-1/2  border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-900 "
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              {/* This another input box */}
              <div className="w-full mt-1 mb-2 border-solid border-2 border-black rounded-lg">
                <Input
                  label="To"
                  amount={convertedAmount}
                  amountDisable={true}
                  required={false}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                />
              </div>
              <input
                className="border-solid border-2 border-indigo-500/100   w-full font-semibold my-2 bg-gray-200 text-black px-4 py-3 rounded-lg
                hover:cursor-pointer
              active:translate-y-1 -translate-x-0"
                type="date"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                required
              />
              <button
                type="submit"
                className=" my-2 w-full font-semibold bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 
                active:translate-y-1 -translate-x-0"
              >
                Convert {from.toUpperCase()} To {to.toUpperCase()}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
