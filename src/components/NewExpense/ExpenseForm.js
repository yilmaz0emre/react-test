import React, {useState} from "react";

import "./ExpenseForm.css";


const ExpenseForm = () => {

  const [enteredTitle, setEnteredTitle]= useState('')
  const [enteredAmount, setEnteredAmound]=useState('');
  const [enteredDate,setEnteredDate]=useState('');
  // const [userInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmound:'',
  //   enteredDate:''
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); 
    // setUserInput({
    //   ...userInput ,
    //   enteredTitle: event.target.value,
    // })
    // setUserInput((prevState)=>{
    //   return {...prevState,enteredTitle: event.target.value};
    // })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmound(event.target.value);
    // setUserInput({
    //   ...userInput ,
    //   enteredAmound: event.target.value,
    // })
  }
  const dateChanceHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // })
  };


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="Text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChanceHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
