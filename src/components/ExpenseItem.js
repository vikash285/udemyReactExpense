import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2023, 9, 9);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 297.5;
  const expenseLocation = "Delhi";

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>
          {expenseTitle} at {expenseLocation}
        </h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
