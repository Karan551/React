import React, { useEffect, useId } from "react";
import $ from "jquery";
//className = "",
function Input({
  label,
  className = "",

  amount,
  //   if amount change then state will also change.(method)
  onAmountChange,
  //   currency change method
  onCurrencyChange,
  required=true,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountId = useId();

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          className="text-black mb-2 inline-block font-semibold"
          htmlFor={amountId}
        >
          {label}
        </label>
        <input
          id={amountId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          required={true}
          value={amount > 0 ? amount : ""}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
      
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-[#333] font-semibold mb-2 w-full">Currency Type</p>
        {/* This is select field */}
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          id="myselect"
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Input;
