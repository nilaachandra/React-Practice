import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `useEffect Count: ${count} ${color}`;
  }, [count, color]); //this code will be runned when any of the two state changes

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };
  return (
    <div className="p-4">
      <h1 style={{ color: color }}>Counter: {count}</h1>
      <button className="border-black border p-2" onClick={increaseCount}>
        {" "}
        Add{" "}
      </button>
      <button className="border-black border p-2" onClick={decreaseCount}>
        {" "}
        Subtract{" "}
      </button>
      <button className="border-black border p-2" onClick={changeColor}>
        {" "}
        Change Color{" "}
      </button>
    </div>
  );
}

export default Counter;
