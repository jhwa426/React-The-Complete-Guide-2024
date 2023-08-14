import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './NewExpense/ExpensesList';
import ExpensesChart from './NewExpense/ExpensesChart';

import './ExpenseItem3.css'


function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2021');

    // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022"); // better to use one state (each statement)

    let filterInfoText = "2019, 2021 & 2022";

    if (filteredYear === "2019") {
        filterInfoText = "2020, 2021 & 2022";
    } else if (filteredYear === "2021") {
        filterInfoText = "2019, 2020 & 2022";
    } else {
        filterInfoText = "2019, 2020 & 2021";
    }


    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);

        // if (selectedYear === "2019") {
        //     setFilterInfoText("2020, 2021 & 2022");
        // } else if (selectedYear === "2020") {
        //     setFilterInfoText("2019, 2021 & 2022");
        // } else if (selectedYear === "2021") {
        //     setFilterInfoText("2019, 2020 & 2022");
        // } else {
        //     setFilterInfoText("2019, 2020 & 2021");
        // }
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No expenses found.</p>;

    // if (filteredExpenses.length > 0) {
    //     expensesContent = (filteredExpenses.map((expense) => (
    //         <ExpenseItem
    //             key={expense.id} // always
    //             title={expense.title}
    //             amount={expense.amount}
    //             date={expense.date}
    //         />
    //     )))
    // };



    return (
        <div>
            <Card className='expenses'>

                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />

                <ExpensesChart
                    expenses={filteredExpenses}
                />

                <p>Data for years {filterInfoText} is hidden.</p>

                <ExpensesList
                    items={filteredExpenses}
                />

                {/* {expensesContent} */}

                {/* {filteredExpenses.length === 0 && (expensesContent)}

            {filteredExpenses.length > 0 &&
                (filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id} // always
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )))
            } */}

                {/* {filteredExpenses.map((expense) => (
                <ExpenseItem
                    key={expense.id} // always
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))} */}

                {/* <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            /> */}

            </Card>
        </div>
    );
};

export default Expenses;

