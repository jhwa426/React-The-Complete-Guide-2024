// Using the useReducer() Hook
import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val.includes("@") };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: action.value.includes("@") };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {

};

const Login = (props) => {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null
    });

    useEffect(() => {
        console.log('EFFECT RUNNING');

        return () => {
            console.log('EFFECT CLEANUP');
        };
    }, []);

    // useEffect(() => {
    //   const identifier = setTimeout(() => {
    //     console.log('Checking form validity!');
    //     setFormIsValid(
    //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
    //     );
    //   }, 500);

    //   return () => {
    //     console.log('CLEANUP');
    //     clearTimeout(identifier);
    //   };
    // }, [enteredEmail, enteredPassword]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "USER_INPUT", val: event.target.value });

        setFormIsValid(
            event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            emailState.isValid.includes('@') && event.target.value.trim().length > 6
        );
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(emailState.isValid, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
                        }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;


// Using the useEffect() Hook

// import React, { useState, useEffect } from 'react';

// import Card from '../UI/Card/Card';
// import classes from './Login.module.css';
// import Button from '../UI/Button/Button';

// const Login = (props) => {
//     const [enteredEmail, setEnteredEmail] = useState('');
//     const [emailIsValid, setEmailIsValid] = useState();
//     const [enteredPassword, setEnteredPassword] = useState('');
//     const [passwordIsValid, setPasswordIsValid] = useState();
//     const [formIsValid, setFormIsValid] = useState(false);

//     // useEffect
//     useEffect(() => {
//         console.log("Effect Running");

//         return () => {
//             console.log("Effect Clean up");
//         }
//     }, [enteredPassword]);
//     // with (dependency) [] - only execute fist time (execute only once)
//     // without (dependency) [] - execute every time


//     useEffect(() => {
//         const identifier = setTimeout(() => {
//             console.log("Checking form validity!");
//             setFormIsValid(
//                 enteredEmail.includes('@') && enteredPassword.trim().length > 6
//             );
//         }, 500);

//         return () => {
//             console.log("Clean up");
//             clearTimeout(identifier);
//         };
//     }, [enteredEmail, enteredPassword]);


//     const emailChangeHandler = (event) => {
//         setEnteredEmail(event.target.value);
//     };

//     const passwordChangeHandler = (event) => {
//         setEnteredPassword(event.target.value);
//     };

//     const validateEmailHandler = () => {
//         setEmailIsValid(enteredEmail.includes('@'));
//     };

//     const validatePasswordHandler = () => {
//         setPasswordIsValid(enteredPassword.trim().length > 6);
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         props.onLogin(enteredEmail, enteredPassword);
//     };

//     return (
//         <Card className={classes.login}>
//             <form onSubmit={submitHandler}>
//                 <div
//                     className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''
//                         }`}
//                 >
//                     <label htmlFor="email">E-Mail</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={enteredEmail}
//                         onChange={emailChangeHandler}
//                         onBlur={validateEmailHandler}
//                     />
//                 </div>
//                 <div
//                     className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''
//                         }`}
//                 >
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={enteredPassword}
//                         onChange={passwordChangeHandler}
//                         onBlur={validatePasswordHandler}
//                     />
//                 </div>
//                 <div className={classes.actions}>
//                     <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//                         Login
//                     </Button>
//                 </div>
//             </form>
//         </Card>
//     );
// };

// export default Login;
