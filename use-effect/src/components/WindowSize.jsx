// // Window Resize Listener

// import { useEffect, useState } from "react";

// const WindowSize = () => {

//     const initialValue = window.innerWidth;
//     const [width, setWidth] = useState(initialValue);

//     useEffect(() => {
//         const updateWidth = () => setWidth(window.innerWidth);
//         window.addEventListener("resize", updateWidth);
//         return () => window.removeEventListener("resize", updateWidth);
//     }, []);

//     return <p>Screen Width: {width}px</p>;
// }

// export default WindowSize;

import { useEffect, useState } from "react";

const WindowSize = () => {
  const initialValue = window.innerWidth;
  const [width, setWidth] = useState(initialValue);
  const [bgColor, setBgColor] = useState(getRandomColor());

  // Generate a random color
  function getRandomColor() {
    const r = Math.floor(Math.random() * 200);
    const g = Math.floor(Math.random() * 200);
    const b = Math.floor(Math.random() * 200);
    return `rgb(${r}, ${g}, ${b})`;
  }

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
      setBgColor(getRandomColor());   // change color dynamically
    };

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <p
      style={{
        padding: "20px",
        backgroundColor: bgColor,
        borderRadius: "8px",
        width: "fit-content",
        fontSize: "18px",
        fontWeight: "600",
      }}
    >
      Screen Width: {width}px
    </p>
  );
};

export default WindowSize;