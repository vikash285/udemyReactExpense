import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    console.log("clicked!");
  };
  const deleteHandler = () => {
    console.log("Delete!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={props.amount}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
