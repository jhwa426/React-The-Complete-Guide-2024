import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }
        props.onAddGoal(enteredValue);

    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label> */}
            {/* <div className={`form-control ${!isValid ? 'invalid' : ''}`}> {`${JS boolean}`} */}
            <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
                {/* <input
                    style={{
                        borderColor: !isValid ? 'red' : 'black',
                        background: !isValid ? 'salmon' : 'transparent'
                    }}
                    type="text" onChange={goalInputChangeHandler} /> */}
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
