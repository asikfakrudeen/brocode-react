// Updating Document Title

import { useEffect, useState } from "react";

const NotificationCounter = () => {

    const initialValue = 0;
    const [messages, setMessages] = useState(initialValue);

    const countMessages = () => setMessages(messages + 1);

    useEffect(() => {document.title = `Messages: ${messages}`;}, [messages]);

    return (<button onClick = {countMessages}>Add Message</button>);
}

export default NotificationCounter;