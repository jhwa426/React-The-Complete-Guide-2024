import React, { useState } from 'react';
import AddUser from '../src/Components/Users/AddUser/AddUser'
import UsersList from "./Components/Users/UserList/UsersList";


function App() {

    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (userName, userAge) => {
        setUsersList((prevUsersList) => {
            return [
                ...prevUsersList,
                { name: userName, age: userAge, id: Math.random.toString() }
            ];
        });
    };


    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </div>
    );
}

export default App;
