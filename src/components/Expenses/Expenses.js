import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2021");

  const AddedYearPickerData = (newYear) => {
    setFilterYear(newYear);
  };

  // Filter Method
  const filterExpenses = props.item.filter((currentExpense)=>{
      // console.log("currentExpense",currentExpense.date.getFullYear())
      // console.log("FilterYear",filterYear)
      return currentExpense.date.getFullYear() == filterYear
  })

  return (
    <Card className="expenses">
      <ExpenseFilter
        value={filterYear}
        onSubmitYearFilter={AddedYearPickerData}
      />
      <ExpensesChart expenses={filterExpenses}/>
      <ExpenseList item={filterExpenses}/>
    </Card>
  );
};

export default Expenses;
