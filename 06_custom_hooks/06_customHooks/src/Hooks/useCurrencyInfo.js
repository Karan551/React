import { useEffect, useState } from "react";

// This is a custom hooks
function useCurrencyInfo(currency, date) {
  const [data, setData] = useState({});
  const currentDate = new Date().toISOString().split("T")[0];

  //   This is new api
  // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json
  // https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/usd.json
  //  // `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`

  //   This is old not working
  // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${
        date ? date : currentDate
      }/v1/currencies/${currency}.json`
    )
      .then((response) => response.json())
      .then((result) => setData(result[currency]));
  }, [currency, date]);



  
  return data;
}

export default useCurrencyInfo;
