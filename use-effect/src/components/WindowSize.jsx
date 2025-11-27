// Window Resize Listener

import { useEffect, useState } from "react";

const WindowSize = () => {

    const initialValue = window.innerWidth;
    const [width, setWidth] = useState(initialValue);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return <p>Screen Width: {width}px</p>;
}

export default WindowSize;