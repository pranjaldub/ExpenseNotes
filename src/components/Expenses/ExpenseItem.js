import React from "react";
import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //using destructure
  //passing the initial value first (props.title) and storing the changed value and function that changed
  //it will change the state of specific  component instance
  const [title, changeValue] = useState(props.title);
  const change = () => {
    //using this we can pass the new value in changeValue fuction that will pass the new value to the use state method
    changeValue("paramter");
    //this console.log will print the initial value and not the changed value ,  as useState() doesnt chaange the values intsantly  ,  rather it schedules the changes to be applied
    console.log(title);
  };
  //At this point the changed value will be displayed because we are outside the function where the value is being changed
  console.log(title);
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={change}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
