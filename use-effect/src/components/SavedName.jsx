// Reading & Saving to Local Storage

import { useEffect, useState } from "react";

const SavedName = () => {

    const initialValue = "";
    const [name, setName] = useState(initialValue);

    const dynamicTyping = (event) => setName(event.target.value);

    useEffect(() => {
        const storedName = localStorage.getItem("savedName");
        if (storedName) setName(storedName);
    }, []); // runs once

    useEffect(() => {
        localStorage.setItem("savedName", name);
    }, [name]);

    return (<input value = {name} onChange = {dynamicTyping} placeholder = "Enter your name"/>);
}

export default SavedName;