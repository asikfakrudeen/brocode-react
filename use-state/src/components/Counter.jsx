import { useEffect, useState } from "react";
import "./counter.css";

const Counter = () => {

  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(count === 0 ? 0 : prev => prev - 1);
  const reset = () => setCount(initialValue);

  useEffect(() => {
    console.log("component mounted:");
  }, []);

  useEffect(() => {
    console.log("count has been updated:", count);
    document.title = `counter : ${count}`;
  }, [count]);

  return (
      <div className = "counter-container">
        <h2 className = "counter-value">{count}</h2>

        <div className = "counter-buttons">
          <button className = "counter-btn" onClick = {increase}>INCREMENT</button>
          <button className = "counter-btn" onClick = {reset}>RESET</button>
          <button className = "counter-btn" onClick = {decrease}>DECREMENT</button>
        </div>
      </div>

  );
};

export default Counter;