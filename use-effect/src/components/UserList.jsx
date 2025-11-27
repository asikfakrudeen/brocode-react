// Fetching Data from API (Very Common)

import { useEffect, useState } from "react";

const UserList = () => {

    const initialValue = [];
    const [users, setUsers] = useState(initialValue);

    useEffect(() => {fetch("https://api.example.com/users").then((response) => response.json()).then((data) => setUsers(data));}, []);
     // runs once
     
    return (
        <ul>
            {users.map((u) => (<li key={u.id}>{u.name}</li>))}
        </ul>
    );
}

export default UserList;