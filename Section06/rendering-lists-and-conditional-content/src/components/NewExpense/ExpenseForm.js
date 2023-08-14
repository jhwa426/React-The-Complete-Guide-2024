import React, { useState } from 'react';
import './ExpenseForm.css';



const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState(''); // "event.target.value" always string
    const [enteredDate, setEnteredDate] = useState('');

    // multiple useState same as above
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // console.log(event.target.value);
        // setUserInput(event.target.value);

        // setUserInput({
        //     enteredTitle: event.target.value,
        //     ...userInput,
        // });

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     enteredAmount: event.target.value,
        //     ...userInput
        // });

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            }
        });
    }

    const dateChangeHandler = (event) => {
        // setUserInput({
        //     enteredDate: event.target.value,
        //     ...userInput
        // });

        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            }
        });
    }


    // alternative way
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        } else if (identifier === "amount") {
            setEnteredAmount(value);
        } else if (identifier === "date") {
            setEnteredDate(value);
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };


    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={(event) => inputChangeHandler('title', event.target.value)}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min="0.01"
                        step="0.01"
                        onChange={(event) => inputChangeHandler('amount', event.target.value)}
                    />
                </div>
                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min="2019-01-01"
                        max="2023-12-31"
                        onChange={(event) => inputChangeHandler('date', event.target.value)}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;