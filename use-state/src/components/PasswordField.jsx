// Show / Hide Password Toggle

import { useState } from "react";

const PasswordField = () => {

    const initialValue = false;
    const [showPassword, setShowPassword] = useState(initialValue);

    const toggleShowAndHide = () => setShowPassword(!showPassword)
    
    return (
    <div>
        <input type = {showPassword ? "text" : "password"} />
        <button onClick = {toggleShowAndHide}> {showPassword ? "Hide" : "Show"}</button>
    </div>
    );
}

export default PasswordField;