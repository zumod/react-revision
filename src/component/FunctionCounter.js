import React, { useState, memo } from "react";

function FunctionCounter() {
    const [counter, setCount] = useState(0);
    console.log(counter, 'counter');
    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={()=>setCount(counter + 1)}>Increment</button>
        </div>
    );
}

export default memo(FunctionCounter);