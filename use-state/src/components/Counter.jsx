// Counter

import { useState } from "react";

const Counter = () => {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(initialValue);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick = {increase}>INCREMENT</button>
      <button onClick = {reset}>RESET</button>
      <button onClick = {decrease}>DECREMENT</button>
    </div>
  );
}

export default Counter;