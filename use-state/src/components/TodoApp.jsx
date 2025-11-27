// List Management (Adding Items)

import { useState } from "react";

const TodoApp = () => {

    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");

    const dynamicTyping = (event) => setTaskText(event.target.value);

    const addTask = () => {
        setTasks([...tasks, taskText]);
        setTaskText("");
    };

    return (
        <div>
        <input value = {taskText} onChange = {dynamicTyping} placeholder = "Add a task" />
        <button onClick = {addTask}>Add</button>
        <ul>
            {tasks.map((item, id) => (<li key = {id}>{item}</li>))}
        </ul>
        </div>
    );
}

export default TodoApp;