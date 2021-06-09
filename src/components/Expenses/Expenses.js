import React, { useState } from "react";
import FilterExpense from "../FilterExpense/FilterExpense";
//import ExpenseItem from "./ExpenseItem";
import RenderFilter from "./RenderFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  //ste state for initial year without user input

  const [newYear, setYear] = useState("2021");
  //state for filtered array
  // const [filtered, setfiltered] = useState(props.items);
  // function filteryear() {
  //   //function to filter year based on user year input
  //   setfiltered(() => {
  //     //deep copying the list in a temporary variable
  //     var temp = [...props.items];
  //     //creating an empty list to store the filtered items
  //     var fil = [];
  //     //looping over the temporary list
  //     for (var i = 0; i < temp.length; i++) {
  //       //checking if the date attribute if list item matches with the year entered by the user
  //       if (temp[i].date.getFullYear().toString() === newYear.toString()) {
  //         //if the year matches then push the item to the new list
  //         fil.push(temp[i]);
  //       }
  //     }
  //     console.log("filteredList", fil);
  //     return fil;
  //   });
  // }

  const addChildExpense = (year) => {
    console.log("recieved year ", year);
    setYear(year);
    // filteryear();
  };

  return (
    <div>
      <FilterExpense
        selectedYear={newYear}
        childYear={addChildExpense}
      ></FilterExpense>
      <Card className="expenses">
        {/* iterating over the filtered list , by using map function ,  which picks each value and convert them to whatever form specified in the map argument
        {filtered.map((items_percount) => (
          <ExpenseItem
            key={items_percount.id}
            title={items_percount.title}
            amount={items_percount.amount}
            date={items_percount.date}
          />
        ))} */}
        <RenderFilter
          items={[...props.items]}
          yearValue={newYear}
        ></RenderFilter>
      </Card>
    </div>
  );
};

export default Expenses;
