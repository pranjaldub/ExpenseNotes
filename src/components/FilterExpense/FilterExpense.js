import React from "react";
import "../NewExpense/NewExpense.css";
const FilterExpense = (props) => {
  const selectYear = (event) => {
    props.childYear(event.target.value);
  };

  return (
    <div className="new-expense">
      <div className="expenses-filter__control">
        <label for="year">Choose an year</label>

        <select value={props.selectedYear} onChange={selectYear}>
          <option value="2021">2021</option>
          <option value="2024">2024</option>
          <option value="2020">2020</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default FilterExpense;
