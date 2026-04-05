# 💰 Finance Dashboard (React + Tailwind + Recharts)

A simple and responsive finance dashboard built with **React**, **Tailwind CSS**, and **Recharts**.
It includes transaction tracking, dark/light mode, and a pie chart for category-wise analysis.

---

## 🚀 Features

* 📊 Pie chart visualization (category-wise expenses/income)
* 🌙 Dark / Light mode toggle (with local storage support)
* 👤 Role switch (Viewer / Admin)
* 📁 Clean and structured transaction data
* 🎨 Tailwind CSS styling
* ⚡ Responsive design

---

## 🛠️ Tech Stack

* React (Hooks)
* Tailwind CSS
* Recharts (for charts)

---

## 📂 Project Structure

```
src/
│── data/
│   └── mock_data.js
│
│── Components/
│   └── Charts.jsx
│
│── App.jsx
│── main.jsx
```

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/karan551/finance-dashboard.git

# Navigate into project
cd finance-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📊 Sample Data

```js
const transactions = [
  { id: 1, date: '2026-04-01', amount: 5000, category: 'Salary', type: 'income' },
  { id: 2, date: '2026-04-02', amount: 1200, category: 'Food', type: 'expense' },
  { id: 3, date: '2026-04-03', amount: 800, category: 'Transport', type: 'expense' },
  { id: 4, date: '2026-04-04', amount: 2000, category: 'Freelance', type: 'income' },
];
```

---

## 🌙 Dark Mode Implementation

* Uses Tailwind's `dark` class strategy
* Applied on `<html>` element
* Stored in `localStorage`

```js
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
```

---

## 📈 Pie Chart Logic

* Transactions are grouped by category
* Categories are normalized (`toLowerCase()`)
* Colors are assigned using `fill` property (no `Cell` used)

---

## 🎯 Future Improvements

* 📅 Date filtering
* 📉 Line/Bar charts
* 🔐 Authentication system
* 💾 Backend integration (API)
* 📱 Mobile-first enhancements

---



