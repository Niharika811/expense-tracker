import React from 'react';

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  const handleEdit = (id) => {
    const title = prompt('Enter new title:');
    const amount = prompt('Enter new amount:');
    const date = prompt('Enter new date:');
    const category = prompt('Enter new category:');
    if (title && amount && date && category) {
      editExpense({
        id,
        title,
        amount: parseFloat(amount),
        date,
        category,
      });
    }
  };

  return (
    <ul>
      {expenses.map(expense => (
        <li key={expense.id}>
          <span>{expense.title} - {'\u20B9'}{expense.amount} - {expense.date} - {expense.category}</span>
          <button onClick={() => handleEdit(expense.id)}>Edit</button>
          <button onClick={() => deleteExpense(expense.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
