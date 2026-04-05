export default function Insights({ transactions }) {
  // Only expenses
  const totalExpenses = transactions.filter((data) => data.type === "expense");

  console.log("this is expense::", totalExpenses);

  // Category-wise total
  const categoryTotal = {};

  totalExpenses.forEach((trans) => {
    categoryTotal[trans.category.toLowerCase()] =
      (categoryTotal[trans.category.toLowerCase()] || 0) + trans.amount;
  });

  console.log("this is category total", categoryTotal);

  // Highest spending category
  const highest = Object.entries(categoryTotal).sort(
    (a, b) => b[1] - a[1]
  )[0];

  // Total income & expense
  const income = transactions
    .filter((data) => data.type === "income")
    .reduce((sum, curr) => sum + curr.amount, 0);

  const expense = totalExpenses.reduce((sum, curr) => sum + curr.amount, 0);

  return (
    <div className="w-full max-w-full bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-3"> Insights</h2>

      {transactions.length === 0 ? (
        <p>No data available</p>
      ) : (
        <div className="space-y-2 sm:space-y-3 md:space-y-4">

          {highest && (
            <p className="break-words">
              Highest Spending:{" "}
              <span className="font-semibold">
                {highest[0][0].toUpperCase() + highest[0].slice(1,)} (₹{highest[1]})
              </span>
            </p>
          )}

          <p>
            Total Income:{" "}
            <span className="text-green-500 font-semibold">
              ₹{income}
            </span>
          </p>

          <p>
            Total Expense:{" "}
            <span className="text-red-500 font-semibold">
              ₹{expense}
            </span>
          </p>

          <p>
            Net Savings:{" "}
            <span className="text-blue-500 font-semibold">
              ₹{income - expense}
            </span>
          </p>
        </div>
      )}
    </div>
  );
}