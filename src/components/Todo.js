import React, { useState, useEffect } from "react";

const Todo = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    const date = new Date().toLocaleDateString("en-US", {
      //   weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(date);
  }, []);

  const addExpense = () => {
    if (description && amount) {
      const newExpense = {
        id: expenses.length + 1,
        date: currentDate,
        amount: parseFloat(amount),
        description,
      };
      const newExpenses = [...expenses, newExpense];
      setExpenses(newExpenses);
      setTotalExpenses(totalExpenses + parseFloat(amount));
      setDescription("");
      setAmount("");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <h1>Expense Tracker</h1>
        <div className="container-1">
          <div className="form-group">
            <input
              type="text"
              id="expenseDescription"
              placeholder="Enter expense description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="number"
              id="expenseAmount"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button id="addExpenseBtn" onClick={addExpense}>
              Add Expense
            </button>
          </div>
          <div className="expense-list">
            <h2>Expense List</h2>
            <ul id="expenseList">
              {expenses.map((expense) => (
                <li key={expense.id}>
                  {expense.id} : {expense.date} : {expense.amount}rs :{" "}
                  {expense.description}
                </li>
              ))}
            </ul>
          </div>
          <div className="total-expenses">
            <h2>
              Total Expenses:{" "}
              <span id="totalExpensesAmount">{totalExpenses}</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
