import React from "react";

const FilterExpense = (props) => {
  const selectYear = (event) => {
    props.childYear(event.target.value);
  };

  return (
    <div>
      <label for="year">Choose an year</label>

      <select value={props.selectedYear} onChange={selectYear}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilterExpense;
