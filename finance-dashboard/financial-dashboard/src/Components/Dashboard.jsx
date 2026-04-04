import { motion } from "framer-motion";

export default function Dashboard({ transactions }) {

  const income = transactions
    .filter((data) => data.type === "income")
    .reduce((sum, curr) => sum + curr.amount, 0);

  const expense = transactions
    .filter((data) => data.type === "expense")
    .reduce((sum, curr) => sum + curr.amount, 0);

  const balance = income - expense;

  const cards = [
    { title: "Balance", value: balance, color: "text-blue-500" },
    { title: "Income", value: income, color: "text-green-500" },
    { title: "Expenses", value: expense, color: "text-red-500" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.025 }}
          className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md hover:shadow-xl transition border-l-4 border-gray-200 dark:border-gray-700 hover:cursor-pointer"
        >
          <h2 className="text-gray-500 dark:text-gray-300 text-xl">
            {card.title}
          </h2>
          <p className={`text-2xl font-bold ${card.color}`}>₹{card.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
