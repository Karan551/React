import { useEffect, useState } from 'react';
import { loadData, saveData } from './utils/storage'; ``;
import { transactions as initialData } from './data/mock_data';
import { Dashboard, Charts, TransactionTable, Insights } from "./Components/index";

export default function App() {

  const [transactions, setTransactions] = useState(loadData() || initialData);

  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });


  useEffect(() => saveData(transactions), [transactions]);

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.classList.add("dark");

      localStorage.setItem("theme", "dark");

    } else {
      root.classList.remove("dark");

      localStorage.setItem("theme", "light");
    }

  }, [dark]);



  return (
    <>
      <div className="min-h-screen w-full flex flex-col bg-gray-300 dark:bg-gray-900 text-black dark:text-white p-4 sm:p-6 lg:p-8 overflow-x-hidden">
        {/* Header */}
        <header className="flex justify-between mb-4">
          <h1 className="text-lg sm:text-xl md:text-4xl font-bold my-2 text-orange-500">Finance Dashboard</h1>


          <div className="flex gap-2 items-center">
            <button onClick={() => setDark(!dark)} className='px-2 text-lg sm:text-xl bg-gray-200 dark:bg-gray-700 rounded hover:cursor-pointer'>{dark ? '🌙' : '☀️'}</button>

            <select name='role' value={role} onChange={(e) => setRole(e.target.value)} className='px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white cursor-pointer'>
              <option value={"viewer"} className='dark:text-white hover:text-black'>Viewer</option>
              <option value={"admin"} className='dark:text-white hover:text-black'>Admin</option>
            </select>
          </div>
        </header>


        {/* dashboard */}
        <div className="max-w-full">
          <Dashboard
            transactions={transactions}

          />
        </div>


        {/* Charts */}
        <div className="max-w-full">
          <Charts

            transactions={transactions}
          />
        </div>


        {/* transctions */}
        <div className="max-w-full">
          <TransactionTable

            role={role}
            transactions={transactions}
            setTransactions={setTransactions}
          />
        </div>


        {/* Insights */}
        <div className="max-w-full">
          <Insights
            transactions={transactions}
          />
        </div>


      </div>


    </>
  );
}