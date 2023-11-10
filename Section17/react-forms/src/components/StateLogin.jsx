import { useState } from 'react';
import Input from "./Input";

export default function Login() {
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: '',
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    });

    const emailIsInvalid = didEdit.email && !enteredValues.email.includes("@");
    const passwordIsInvalid = didEdit.password && !enteredValues.password.trim().length < 6;

    function handleSubmit(event) {
        event.preventDefault();

        console.log(enteredValues);
    }

    function handleInputChange(identifier, value) {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value,
        }));
    }

    // function handleEmailChange(event) {
    //   setEnteredEmail(event.target.value);
    // }

    // function handlePasswordChange(event) {
    //   setEnteredPassword(event.target.value);
    // }

    function handleInputBlur(identifier) {
        setDidEdit((prevEdit) => ({
            ...prevEdit,
            [identifier]: true
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="control-row">
                {/* <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={(event) => handleInputChange('email', event.target.value)}
                        value={enteredValues.email}
                        onBlur={() => handleInputBlur("email")}
                    />
                    <div className="control-error">
                        {emailIsInvalid && <p>Please enter valid value</p>}
                    </div>
                </div> */}


                <Input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(event) => handleInputChange('email', event.target.value)}
                    value={emailIsInvalid.email}
                    onBlur={() => handleInputBlur("email")}
                    error={emailIsInvalid && "Please enter valid email"}
                />

                <Input
                    id="password"
                    type="password"
                    name="password"
                    onChange={(event) => handleInputChange('password', event.target.value)}
                    value={passwordIsInvalid.password}
                    error={passwordIsInvalid && "Please enter valid password"}
                />

                {/* <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        onChange={(event) =>
                            handleInputChange('password', event.target.value)
                        }
                        value={enteredValues.password}
                    />
                </div> */}
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
