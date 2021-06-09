import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import HiddenAdd from "./components/Expenses/HiddenAdd";

import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  const [expensedata, increaseExpenseData] = useState(expenses);
  //adding the expense we got from the child compoenent
  const addExpense = (childData) => {
    //console.log("data recieved", childData);
    expensedata.push(childData);
    //getting the previous state and appending the item received from add expense and add to the main list using arrow function
    increaseExpenseData((prevState) => {
      return [childData, ...prevState];
    });
    console.log("increased expense", expensedata);
  };
  const [show, setShow] = useState(false);
  const [cancel, setCancel] = useState(false);
  const functionHide = () => {
    setShow(!show);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <HiddenAdd
        // onClick={functionHide}
        cancel={functionHide}
        display={show}
        getExpense={addExpense}
      ></HiddenAdd>

      {/* passing the updated list to the component to dynamically display the list */}
      <Expenses items={expensedata} />
    </div>
  );
};

export default App;
