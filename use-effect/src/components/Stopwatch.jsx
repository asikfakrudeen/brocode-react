// Timer / Interval

import { useEffect, useState } from "react";

const Stopwatch = () => {

    const initialValue = 0;
    const [seconds, setSeconds] = useState(initialValue);

    useEffect(() => {
        const timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timer); // cleanup
    }, []);

    return <h2>Time: {seconds}s</h2>;
}

export default Stopwatch;