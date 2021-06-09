import NewExpense from "../NewExpense/NewExpense";
import React from "react";
const HiddenAdd = (props) => {
  if (!props.display || !props.cancel) {
    return (
      <div>
        <button onClick={props.cancel}>Add expense</button>
      </div>
    );
  } else {
    return (
      <div>
        <NewExpense getExpense={props.getExpense}></NewExpense>
        <button onClick={props.cancel}>cancel</button>
      </div>
    );
  }
};
export default HiddenAdd;
