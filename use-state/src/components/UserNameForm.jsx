// Input Field (Form Handling)

import { useState } from "react";

const UserNameForm = () => {

    const initialValue = "";
    const [username, setUsername] = useState(initialValue);

    const dynamicTyping = (event) => setUsername(event.target.value);

    return (
        <div>
            <input type = "text" placeholder = "Enter your name" value = {username} onChange = {dynamicTyping} />
            <p>Hello, {username}</p>
        </div>);
}

export default UserNameForm;