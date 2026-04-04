import { useState } from "react";
import { motion } from "framer-motion";

export default function TransactionTable({
  transactions,
  setTransactions,
  role,
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  //  Filter + Search Logic
  const filtered = transactions.filter((eachTransactions) => {
    return (
      eachTransactions.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "all" || eachTransactions.type === filter)
    );
  });

  //  Add Transaction (Admin only)
  const addTransaction = () => {
    const newTx = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      amount: Math.floor(Math.random() * 2000),
      category: "Misc",
      type: "expense",
    };

    setTransactions([...transactions, newTx]);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow mb-4">

      {/*  Controls */}
      <div className="flex flex-col md:flex-row gap-2 mb-3">

        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded text-black w-full dark:placeholder:text-gray-50 dark:text-gray-50 dark:active:border-white"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 rounded text-black dark:text-gray-50 border-2"
        >
          <option value="all" className="dark:text-gray-900">All</option>
          <option value="income" className="dark:text-gray-900">Income</option>
          <option value="expense" className="dark:text-gray-900">Expense</option>
        </select>

        {role === "admin" && (
          <button
            onClick={addTransaction}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            + Add
          </button>
        )}
      </div>

      {/*  Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2 text-xl">Date</th>
              <th className="text-xl">Amount</th>
              <th className="text-xl">Category</th>
              <th className="text-xl">Type</th>
            </tr>
          </thead>

          <tbody>
            {filtered.length > 0 ? (
              filtered.map((t) => (
                <motion.tr
                  key={t.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="border-b hover:bg-gray-100 dark:hover:bg-gray-700 hover:cursor-pointer"
                >
                  <td className="py-2 text-xl">{t.date}</td>
                  <td className="font-semibold text-xl">₹{t.amount}</td>
                  <td className="text-xl">{t.category}</td>
                  <td
                    className={
                      ` ${t.type === "income"
                        ? "text-green-500"
                        : "text-red-500"} text-xl`
                    }
                  >
                    {t.type[0].toLocaleUpperCase() + t.type.slice(1)}
                  </td>
                </motion.tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}