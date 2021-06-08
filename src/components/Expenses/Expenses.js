import React, { useState } from "react";
import FilterExpense from "../FilterExpense/FilterExpense";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  //ste state for initial year without user input
  const [newYear, setYear] = useState("2021");
  const addChildExpense = (year) => {
    console.log("recieved year ", year);
    setYear(year);
    console.log(newYear);
  };
  return (
    <div>
      <FilterExpense
        selectedYear={newYear}
        childYear={addChildExpense}
      ></FilterExpense>
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
