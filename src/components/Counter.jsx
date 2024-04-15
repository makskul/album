import React, { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0)
    function inc() {
        setCounter(prevCount => prevCount + 1)
    }

    return (
        <button onClick={inc}>Click {counter > 0 ? counter : ''}</button>
    )
}

export default Counter;