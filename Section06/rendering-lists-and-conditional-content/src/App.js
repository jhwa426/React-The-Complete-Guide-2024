import React, { useState } from 'react';

// import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';

import NewExpense from './components/NewExpense/NewExepense';

const DUMMY_EXPENSE = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSE); // for updating

    const addExpenseHandler = (expense) => {
        setExpenses(prevExpenses => {
            return [expense, ...prevExpenses];
        });

        // setExpenses([expense, ...expenses]);
        // console.log(expenses);
    };

    return (
        <div>
            <h2>Let's get started!</h2>

            {/* <Expenses items={expenses} /> */}

            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
}

export default App;
