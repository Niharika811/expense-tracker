import React from 'react';

function ExpenseSummary({ expenses }) {
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Amount Spent: {'\u20B9'}{totalAmount.toFixed(2)}</p>
      <ul>
        {Object.keys(categoryTotals).map(category => (
          <li key={category}>
            {category}: {'\u20B9'}{categoryTotals[category].toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseSummary;
