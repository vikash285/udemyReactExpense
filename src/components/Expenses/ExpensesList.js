import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  } else if (props.items.length === 1) {
    return [
      <ul className="expenses-list">
        {
          <ExpenseItem
            key={props.items[0].id}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            location={props.items[0].location}
          />
        }
      </ul>,
      <p className="expenses-list__fallback">
        Only single expense, add more...
      </p>,
    ];
  } else {
    return (
      <ul className="expenses-list">
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </ul>
    );
  }
};
export default ExpensesList;
