import React, { useState } from "react";
import "./ExpenseForm.css";
//here input props is the function input passed from parent compoenent to the child component which contains a fucntion using which we can pass the value generated here
const ExpenseForm = (propsdata) => {
  //MULTIPLE STATE APPROACH
  //setting up an iniial state for title with no input at first
  const [enteredTitle, setEnteredTitle] = useState("");
  //setting up initial state for date
  const [enteredDate, setEnteredDate] = useState("");
  //setting up the initial state for amount
  const [enteredAmount, setEnteredAmount] = useState("");
  const changeTitle = (event) => {
    console.log(event.target.value);
    //saving the state with value changed
    //we are saving the value in a variable somehow that it is detached from the fucntion/component hook and re-execution of functiom dont effect it.
    //event.target.value is always a string
    setEnteredTitle(event.target.value);
  };
  const changeDate = (event) => {
    setEnteredDate(event.target.value);
  };
  const changeAmount = (event) => {
    setEnteredAmount(event.target.value);
  };

  //SINGLE STATE APPROACH
  // we are are using object of all the user input values to to updated at once
  //   const [userInput , setUserInput] = useState({
  //       enteredTitle:'',enteredAmount:'',enteredDate:''
  //   })

  //Now for a single state to change all the values , we need to re assign all the values to the keys , if we only assign values  to some key ,  then the state will
  //be updated and keys will be lost ,
  //So in this case where  , i only want to chaaange the value  of title and not others , just use spread operator to copy all the keys with initial value and then
  //override the title key by assigning new value with event  , so by doing this only title will be changed rest all will be copied as it is
  //   const changeTitleUsingSingleState = (event) =>{
  //       setUserInput({
  //           ...userInput,//copying like this is not a good practice when using sigle state , here we are using previous state for other values as we are just copying then from previous state
  //           enteredTitle:event.target.value
  //       })
  //   }

  //using the above approach is not preferable as it depends on the previous state
  //so will will rewrite a the above fucntion with a correct approach

  //ALWAYS USE THIS APPROACH IF THE NEXT STATE DEPENDS ON THE PREVIOUS STATE
  // const changeTitle = (event) =>{
  //     //calling the set userInput same as above but here will use lambda function inside it that will accept the previous state and return the new state
  //     setUserInput((prevState)=>{return {...prevState , enteredTtitle:event.target.value}})
  // by using this approach ,  react will make sure that the state snapshop that were getting by ...prevState will be the latest previos state
  //  }

  //   const changeDateUsingSingleState = (event) =>{
  //     setUserInput({
  //         ...userInput,
  //         enteredDate:event.target.value
  //     })
  // }
  // const changeAmountUsingSingleState = (event) =>{
  //     setUserInput({
  //         ...userInput,
  //         enteredAmount:event.target.value
  //     })
  // }
  const submitForm = (event) => {
    event.preventDefault(); //disable autoreloading and the page doesnt relaod on every submit click
    //create a new object with all the data retieved by the form
    const allData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };
    //passing the data generated here to the parent component using the function as input in the parent compoenent
    propsdata.detailsFromChild(allData);
    //resetting all the user enntered fields to empty and reflect on the form html
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };
  return (
    //   use onSubmit on form tag for submitting all the input details
    <form onSubmit={submitForm}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* here we can either call the functions using different state or the fucntions using same state but assigning different values */}
          <input
            type="text"
            value={enteredTitle}
            onChange={changeTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={enteredAmount}
            onChange={changeAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2021-05-10"
            max="2023-05-10"
            value={enteredDate}
            onChange={changeDate}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
