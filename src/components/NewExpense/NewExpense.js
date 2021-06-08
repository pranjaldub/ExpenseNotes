//form logic to inoput new expense data

import ExpenseForm from "./ExpenseForm";
const newExpense = (props) => {
  const getDetails = (recievedData) => {
    const data = { ...recievedData, id: Math.random().toString() };
    props.getExpense(data);
  };

  return (
    <div>
      {/* passing the pointer of parent function to the child component so that the child component can access it to pass the value */}
      <ExpenseForm detailsFromChild={getDetails}></ExpenseForm>
    </div>
  );
};

export default newExpense;
