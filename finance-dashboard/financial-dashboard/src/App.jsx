import { useEffect, useState } from 'react';
import { transactions as initialData } from './data/mock_data';
import { Dashboard, Charts, TransactionTable, Insights } from "./Components/index";

export default function App() {

  const [transactions, setTransactions] = useState(initialData);

  const [role, setRole] = useState("viewer");
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });



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
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white p-4">
        {/* Header */}
        <header className="flex justify-between mb-4">
          <h1 className="text-4xl font-bold my-2">Finance Dashboard</h1>


          <div className="flex gap-2">
            <button onClick={() => setDark(!dark)} className='px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded'>{dark ? '🌙' : '☀️'}</button>
            <select value={role} onChange={(e) => setRole(e.target.value)} className='hover:cursor-pointer'>
              <option value={"viewer"} className='hover:text-black dark:text-gray-800 cursor-pointer'>Viewer</option>
              <option value={"admin"} className='hover:text-black dark:text-gray-800'>Admin</option>
            </select>
          </div>
        </header>


        {/* dashboard */}
        <Dashboard
          transactions={transactions}

        />

        {/* Charts */}
        <Charts

          transactions={transactions}
        />

        {/* transctions */}
        <TransactionTable

          role={role}
          transactions={transactions}
          setTransactions={setTransactions}
        />

        {/* Insights */}
        <Insights
          transactions={transactions}
        />
      </div>


    </>
  );
}