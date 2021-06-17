import React,{useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing,setIsEditing] =  useState(false)

    const saveExpenseDataHandler = (enteredExpenseData)=>{
    
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // console.log(expenseData)

        // console.log("enteredExpenseData",enteredExpenseData)
        props.onSubmitNewExpense(enteredExpenseData)
        setIsEditing(!isEditing)
    }

    const editingHandler = ()=>{
        setIsEditing(!isEditing)
    }

    const editCancelHandler = ()=>{
        setIsEditing(!isEditing)
    }

    return (
        <div className="new-expense">
        {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
         {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancel={editCancelHandler}/>}
        </div>
    )
}

export default NewExpense
