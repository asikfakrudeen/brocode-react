// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                   1. Accessing/Interacting with DOM elements
//                   2. Handling Focus, Animations, and Transitions
//                   3. Managing Timers and Intervals

import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "red";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "orange";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "green";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                STOP
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                READY
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                GO
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default MyComponent;