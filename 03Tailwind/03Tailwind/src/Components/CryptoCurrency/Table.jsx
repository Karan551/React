import React from "react";
import { cryptocurrencyList } from "../../cryptocurrency-list";

function Table({ amount, availableBalance, isError }) {

    /*    <td>{hasError ? "n/a" : coins === "" ?
        '0.00000000' : Number((coins * currency.rate).toFixed(8))}</td> */


    // number_of_coins=amount*exchange_rate
    return (
        <div className="my-4 relative overflow-x-auto border bg-gray-50 rounded-xl px-8 py-5">

            <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <tr className="text-lg text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <th>Cryptocurrency</th>
                        <th>Exchange Rate</th>
                        <th>Number of Coins</th>
                    </tr>
                </thead>
                <tbody data-testid="exchange-data"
                    className="px-6 py-4 w-full"
                >
                    {
                        cryptocurrencyList.map((eachCurrency, index) => (
                            <tr className="bg-white text-lg border-b dark:bg-gray-800 dark:border-gray-700 px-6 py-3 border-gray-200" key={eachCurrency.code}>
                                <td>{eachCurrency.name}</td>
                                <td>1 USD = {
                                    amount ?
                                        `${eachCurrency.rate} ${eachCurrency.code}`
                                        : (0).toFixed(8)
                                }</td>
                                <td>{isError ?
                                    "n/a"
                                    : amount ?
                                        (amount * eachCurrency.rate).toFixed(8) : '0.00000000' }</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default Table;
