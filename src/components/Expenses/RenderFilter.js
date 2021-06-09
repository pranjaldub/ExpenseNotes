//This component will render the list items which are passed as input through props from expenses component dynamically by using props.year as thhe criterial of filtration
//of the original list

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
function RenderFilter(props) {
  //const [filtered, setfiltered] = useState(props.items);

  //function to filter year based on user year input
  //   setfiltered(() => {
  //     //deep copying the list in a temporary variable
  //     var temp = [...props.items];
  //     //creating an empty list to store the filtered items
  //     var fil = [];
  //     //looping over the temporary listt
  //     for (var i = 0; i < temp.length; i++) {
  //       //checking if the date attribute if list item matches with the year entered by the user
  //       if (
  //         temp[i].date.getFullYear().toString() === props.yearValue.toString()
  //       ) {
  //         //if the year matches then push the item to the new list
  //         fil.push(temp[i]);
  //       }
  //     }

  //     return fil;
  //   });
  //   console.log("in render.js filtered", filtered);

  var temp = [...props.items];
  //     //creating an empty list to store the filtered items
  var fil = [];
  //     //looping over the temporary list
  for (var i = 0; i < temp.length; i++) {
    //       //checking if the date attribute if list item matches with the year entered by the user
    if (temp[i].date.getFullYear().toString() === props.yearValue.toString()) {
      //if the year matches then push the item to the new list
      fil.push(temp[i]);
    }
  }
  //if no items available  ,  we can either use return in if and else like here OR use ternary operator in the return part as shown below --->
  if (fil.length > 0) {
    return (
      <div>
        {/* iterating over the filtered list , by using map function ,  which picks each value and convert them to whatever form specified in the map argument */}

        {/* //we can apply condition in the return part too using ternary operator */}
        {/* {fil.length === 0 ? (
          <h2>No items available</h2>
        ) : (
          fil.map((items_percount) => (
            <ExpenseItem
              key={items_percount.id}
              title={items_percount.title}
              amount={items_percount.amount}
              date={items_percount.date}
            />
          ))
        )} */}
        <ExpensesChart expenses={fil} />
        {fil.map((items_percount) => (
          <ExpenseItem
            key={items_percount.id}
            title={items_percount.title}
            amount={items_percount.amount}
            date={items_percount.date}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <ExpensesChart expenses={fil} />
        <h2>No items available</h2>
      </div>
    );
  }
}
export default RenderFilter;
