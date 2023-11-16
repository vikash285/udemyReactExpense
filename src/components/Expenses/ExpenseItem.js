import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };
  const clickHandler1 = () => {
    setAmount("100");
    console.log(amount);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} location={props.location} amount={amount} />
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={clickHandler1}>Up Amount</button>
    </Card>
  );
};

export default ExpenseItem;
