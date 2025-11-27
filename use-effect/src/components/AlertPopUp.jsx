// Show/Hide Modal On State Change

import { useEffect, useState } from "react";

const AlertPopup = () => {
    
    const initialValue = false;
    const [showAlert, setShowAlert] = useState(initialValue);

    const alertStatus = () => setShowAlert(true);

    useEffect(() => {
        if (showAlert) {
        console.log("Showing popup for user");
        }
    }, [showAlert]);

    return (
        <div>
            <button onClick = {alertStatus}>Show Alert</button>
        </div>
    );
}

export default AlertPopup;