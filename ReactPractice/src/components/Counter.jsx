import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };
    const resetCount = () => {
        setCount(0)
    }
    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div className="ml-4">
            <h2>This is my Counter</h2>
            <p className="border border-black bg-[beige] w-[10%]">Count: {count}</p>
            <button onClick={decrementCount} className="border border-black m-4 h-8 w-8" >-</button>
            <button onClick={resetCount} className="border border-black m-4 h-8 w-12" >Reset</button>
            <button onClick={incrementCount} className="border border-black m-4 h-8 w-8" >+</button>
        </div>
    )
}

export default Counter;
