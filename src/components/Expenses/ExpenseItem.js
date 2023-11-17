import React from "react";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        location={props.location}
        amount={amount}
      />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler1}>Up Amount</button>
    </Card>
  );
};

export default ExpenseItem;
