import { useCallback, useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState(["Pay bills", "Send report"]);

  const deleteTodo = useCallback((index) => {
    setTodos(prev => prev.filter((_, i) => i !== index));
  }, []);

  return (
    <ul>
      {todos.map((task, index) => (
        <li key={index}>
          {task}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoApp;