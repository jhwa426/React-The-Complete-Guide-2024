import React, { useState } from 'react';

import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) {
    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = "Car Insurance";
    // const expenseAmount = 295.67;

    const [title, setTitle] = useState(props.title); // default and updated element


    const clickHandler = () => {
        console.log(title);
        console.log("Clicked!!");
        setTitle("Updated!"); // it will be updated when click the button
    };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate
                    date={props.date} // there was no "date" so must be called "date"
                />

                <div className='expense-item__description'>
                    <h2>{props.title}</h2>

                    <div className='expense-item__price'>${props.amount}</div>
                </div>
                <button onClick={clickHandler}>Click title</button>

            </Card >
        </li>
    );
}


export default ExpenseItem;