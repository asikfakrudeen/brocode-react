import { useState, useMemo } from "react";

const ExpensiveCalculator = () => {

    const [count, setCount] = useState(0);

    const expensiveValue = useMemo(() => {
        let total = 0;
        for (let i = 0; i < 50000000; i++) {
        total += i;
        }
        return total;
    }, []); // runs only once

    return (
        <>
        <h3>Expensive Value: {expensiveValue}</h3>
        <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
        </>
    );
}

export default ExpensiveCalculator;