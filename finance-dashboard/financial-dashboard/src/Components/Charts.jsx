import {
  PieChart,
  Pie,
  Tooltip,
  
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function Charts({ transactions }) {
  // Convert data → category wise total (IMPORTANT logic)
  const expenseData = Object.values(
    transactions
      .filter((t) => t.type === "expense")
      .reduce((acc, curr) => {
        acc[curr.category] = acc[curr.category] || {
          name: curr.category,
          value: 0,
        };
        acc[curr.category].value += curr.amount;
        return acc;
      }, {})
  );
  console.log('this is expense data', expenseData);
  return (
    <div className="grid md:grid-cols-2 gap-4 mb-4">

      {/*  PIE CHART */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="mb-2 font-semibold">Spending Breakdown</h2>

        <PieChart width={400} height={250} responsive>
          <Pie
            data={expenseData}
            dataKey="value"
            outerRadius={90}
            label
            fill="#37AFDE"
            isAnimationActive={true}
            
          >
          </Pie>

          <Tooltip defaultIndex={5}/>
        </PieChart>
      </div>

      {/*  LINE CHART */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
        <h2 className="mb-2 font-semibold">Balance Trend</h2>

        <LineChart width={350} height={250} data={transactions} responsive>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" />
        </LineChart>
      </div>
    </div>
  );
}