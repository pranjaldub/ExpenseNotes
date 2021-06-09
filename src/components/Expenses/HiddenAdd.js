import NewExpense from "../NewExpense/NewExpense";
import "../NewExpense/NewExpense.css";
import React from "react";
const HiddenAdd = (props) => {
  if (!props.display || !props.cancel) {
    return (
      <div className="new-expense">
        <button onClick={props.cancel}>Add expense</button>
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <NewExpense getExpense={props.getExpense}></NewExpense>
        <button onClick={props.cancel}>cancel</button>
      </div>
    );
  }
};
export default HiddenAdd;
